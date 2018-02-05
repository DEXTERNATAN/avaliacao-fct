import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';
import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';
import { LoaderService } from 'app/shared/services/loader.service';

import { Distribuicao } from './../distribuicao.model';
import { DistribuicaoService } from './../distribuicao.service';
import { FaixaService } from './../../faixa/faixa.service';
import { Faixa } from './../../faixa/faixa.model';

@Component({
    selector: 'mt-distribuicao-form',
    templateUrl: './distribuicao-form.component.html',
    styleUrls: ['./distribuicao-form.component.css']
})

export class DistribuicaoFormComponent implements OnInit {

    formDistribuicao: FormGroup;
    title: string;
    distribuicao: Distribuicao = new Distribuicao();
    idResource: any;
    listFaixas: FormArray;
    faixaList: Distribuicao[] = [];
    faixa: Faixa;

    public maskDate = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private distribuicaoService: DistribuicaoService,
        private faixaService: FaixaService,
        private loaderService: LoaderService,
        private mensagensHandler: MensagensHandler,
    ) {
        this.formDistribuicao = formBuilder.group({
            valor: [null, Validators.required],
            pontuacao_minima: [null],
            pontuacao_maxima: [null],
            diferenca: [null],
            amplitude_faixas: [null],
            qtde_faixas: [null, Validators.required],
            dt_registro: [null],
            listFaixas: this.formBuilder.array([])
        });
    }

    ngOnInit() {

        this.loaderService.setMsgLoading('Carregando ...');
        this.mensagensHandler.handleClearMessages();

        this.distribuicaoService.getDistribuicao().subscribe(
            faixas => {
                this.faixaList = faixas;
                faixas.forEach(fxs => {
                    this.addItemFaixa(fxs);
                });
            },
            response => {
                if (response.status === 404) {
                    this.router.navigate(['faixa']);
                }
            },
            () => {
                let index = 0;
                let tamanho: number = this.listFaixas.controls.length;
                let limiteSuperiorAnteriorLc = 0;

                this.listFaixas.controls.map(function(data) {

                    index = index + 1;
                    let pontuacaMinimaLc = this.formDistribuicao.get('pontuacao_minima').value;
                    let amplitudeFaixasLc = this.formDistribuicao.get('amplitude_faixas').value;

                    // this.formBuilder.group
                    let limiteInferiorLc = data.get('limiteInferior');
                    let limiteSuperiorLc = data.get('limiteSuperior');
                    let pontReferenciaLc = data.get('pontuacaoReferencia');

                    if ( index === tamanho ) {
                        limiteInferiorLc.setValue(limiteSuperiorAnteriorLc + 0.01);
                        limiteSuperiorLc.setValue(limiteInferiorLc.value + amplitudeFaixasLc);
                        pontReferenciaLc.setValue(limiteInferiorLc.value);
                    } else {
                        if ( index > 1 ) {
                            limiteInferiorLc.setValue(limiteSuperiorAnteriorLc + 0.01);
                            limiteSuperiorLc.setValue(limiteInferiorLc.value + amplitudeFaixasLc);
                            pontReferenciaLc.setValue(limiteInferiorLc.value + (amplitudeFaixasLc / 2));
                        } else {
                            limiteInferiorLc.setValue(pontuacaMinimaLc);
                            limiteSuperiorLc.setValue(pontuacaMinimaLc + amplitudeFaixasLc);
                            pontReferenciaLc.setValue(limiteSuperiorLc.value);
                        }
                        limiteSuperiorAnteriorLc = limiteSuperiorLc.value;
                    }

                    this.faixa = new Faixa(limiteInferiorLc.value, limiteSuperiorLc.value, pontReferenciaLc.value, '1');
                    this.faixaService.addFaixa(this.faixa);

                    console.log('# ', index, 'Limite inferior: ', limiteInferiorLc.value, 'Limite Superior: ', limiteSuperiorLc.value,
                                                                                  'Pontuação de referência: ', pontReferenciaLc.value);

                });
            }
        );

        // se inscreve para verificar alterações no valor das faixas
        this.formDistribuicao.get('qtde_faixas').valueChanges.subscribe( /* <- does work */
            changes => {
                // console.log('title has changed:', changes);
                this.calcularAmplitude(false);
            }
          );
    }

    save() {

        // Setando a nova data para salvar no banco
        this.formDistribuicao.get('dt_registro').setValue(null);

        // Chamanda para edicao e cadastro no banco
        let result, userValue = this.formDistribuicao.value;
        let atualizar: boolean;

        if (this.idResource) {
            atualizar = true;
            this.loaderService.setMsgLoading('Atualizando a distribuição ...');
            result = this.distribuicaoService.updateDistribuicao(this.idResource, userValue);
        } else {
            atualizar = false;
            this.loaderService.setMsgLoading('Salvando a distribuição ...');
            result = this.distribuicaoService.addDistribuicao(userValue);
        }
        result.subscribe(data => {
            if (atualizar) {
                this.mensagensHandler.handleSuccess('Distribuição atualizada com sucesso!');
            } else {
                this.mensagensHandler.handleSuccess('Distribuição salva com sucesso!');
            }
            this.router.navigate(['distribuicao']);
        }
        );
    }

    calcularDiferencaPontuacao(): void {
        let minima: number = parseFloat(this.distribuicao.pontuacao_minima);
        let maxima: number = parseFloat(this.distribuicao.pontuacao_maxima);
        let calculoDiferenca: any = (maxima - minima).toFixed(2);

        this.formDistribuicao.get('diferenca').setValue(calculoDiferenca);
    }

    calcularAmplitude(opcao: boolean): void {

        let pontMaximaLc: number = this.formDistribuicao.get('pontuacao_maxima').value;
        let pontMinimaLc: number = this.formDistribuicao.get('pontuacao_minima').value;
        let diferenca: number = (pontMaximaLc - pontMinimaLc || 0);
        let qtdefaixas: number = (opcao ? parseFloat(this.distribuicao.qtde_faixas) : this.formDistribuicao.get('qtde_faixas').value);
        let Amplitude: number = (diferenca / qtdefaixas);

        this.formDistribuicao.get('amplitude_faixas').setValue(Amplitude.toFixed(2));
    }

    private addItemFaixa(faixas: Distribuicao): void {
        this.listFaixas = this.formDistribuicao.get('listFaixas') as FormArray;
        this.listFaixas.push(this.createItemFaixa(faixas));
    }

    private createItemFaixa(faixas: Distribuicao): FormGroup {
        return this.formBuilder.group({
            limiteInferior: '0.00',
            limiteSuperior: '0.00',
            pontuacaoReferencia: '0.00'
        });
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/distribuicao']);
    }

    hasErrors(): boolean {
        let hasErrors = false;
        for ( let controlName in this.formDistribuicao.controls ) {
            let control: AbstractControl = this.formDistribuicao.controls[controlName];
            if ( !control.valid && !control.pristine ) {
                hasErrors = true;
                break;
            }
        }
        return hasErrors;
    }
}
