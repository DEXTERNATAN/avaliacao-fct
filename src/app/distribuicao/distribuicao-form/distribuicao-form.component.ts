import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
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
    pontuacaMinimaLc = 0.00;
    diferenca: any;
    amplitudeFaixasLc: any;

    public maskDate = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private distribuicaoService: DistribuicaoService,
        private faixaService: FaixaService,
        private loaderService: LoaderService,
        private mensagensHandler: MensagensHandler,
    ) {}

    ngOnInit() {

        this.formDistribuicao = this.formBuilder.group({
            valor: null,
            pontuacao_minima: null,
            pontuacao_maxima: null,
            diferenca: [null],
            amplitude_faixas: [null],
            qtde_faixas: [null, Validators.required],
            dt_registro: [null],
            listFaixas: this.formBuilder.array([])
        });

        this.loaderService.setMsgLoading('Carregando ...');
        this.mensagensHandler.handleClearMessages();

        this.distribuicaoService.getDistribuicao().subscribe(
            faixas => {
                this.faixaList = faixas;
                faixas.forEach(fxs => {
                    this.formDistribuicao.patchValue({
                        valor: fxs.valor,
                        pontuacao_minima: fxs.pontuacao_minima,
                        pontuacao_maxima: fxs.pontuacao_maxima,
                        qtde_faixas: fxs.qtde_faixas,
                        dt_registro: fxs.dt_registro
                    });
                });
            },
            response => {
                if (response.status === 404) {
                    this.router.navigate(['faixa']);
                }
            },
            () => {
                this.pontuacaMinimaLc = this.formDistribuicao.get('pontuacao_minima').value;
                this.diferenca = (this.formDistribuicao.get('pontuacao_maxima').value -
                    this.formDistribuicao.get('pontuacao_minima').value).toFixed(2);

                this.formDistribuicao.get('diferenca').setValue(this.diferenca);

                this.amplitudeFaixasLc = (parseFloat(this.diferenca) / this.formDistribuicao.get('qtde_faixas').value).toFixed(2);

            }
        );

        this.formDistribuicao.get('qtde_faixas').valueChanges.subscribe( /* <- does work */
            changes => {
                this.calcularAmplitude(false);
            }
          );
    }

    save() {

        this.calculaFaixa();

        // Setando a nova data para salvar no banco
        this.formDistribuicao.get('dt_registro').setValue(null);

        // Chamanda para edicao e cadastro no banco
        let result, userValue = this.formDistribuicao.value;
        let atualizar: boolean;

        if (this.idResource) {
            atualizar = true;
            this.loaderService.setMsgLoading('Atualizando a distribuição ...');
            result = this.distribuicaoService.updateDistribuicao(this.idResource, userValue);

            for (let i = 0; i <= this.listFaixas.controls.length; i++) {
                let result2, userValue2 = this.listFaixas.value[i];
                this.loaderService.setMsgLoading('Atualizando a faixa ...' + [ i + 1 ]);
                result2 = this.faixaService.updateFaixa((i + 1 ), userValue2[i]);
            }

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

    private calculaFaixa(): void {

        let tamanhoFaixa: number = this.formDistribuicao.get('qtde_faixas').value;
        this.faixaList.forEach(fxs => {
            for (let i = 1; i <= tamanhoFaixa; i++) {
                this.addItemFaixa(fxs);
            }
        });

        console.log('this.listFaixas.controls.length => ', this.listFaixas.controls.length);

        this.pontuacaMinimaLc = this.formDistribuicao.get('pontuacao_minima').value;
        this.diferenca = (this.formDistribuicao.get('pontuacao_maxima').value -
                            this.formDistribuicao.get('pontuacao_minima').value);

        this.formDistribuicao.get('diferenca').setValue(this.diferenca);

        let index = 0;
        let tamanho: number = this.listFaixas.controls.length;
        let limiteSuperiorAnteriorLc = 0.00;
        let pontuacaMinimaLc = this.pontuacaMinimaLc;
        let amplitudeFaixasLc = (parseFloat(this.diferenca) / tamanhoFaixa);

        this.listFaixas.controls.map(function (data) {

            index = index + 1;
            let limiteInferiorLc = data.get('limiteInferior');
            let limiteSuperiorLc = data.get('limiteSuperior');
            let pontReferenciaLc = data.get('pontuacaoReferencia');

            if (index === tamanho) {
                limiteInferiorLc.setValue(limiteSuperiorAnteriorLc);
                limiteSuperiorLc.setValue(limiteInferiorLc.value + amplitudeFaixasLc);
                pontReferenciaLc.setValue(limiteInferiorLc.value);
            } else {
                if (index > 1) {
                    limiteInferiorLc.setValue(limiteSuperiorAnteriorLc);
                    limiteSuperiorLc.setValue(limiteInferiorLc.value + amplitudeFaixasLc);
                    pontReferenciaLc.setValue(limiteInferiorLc.value + (amplitudeFaixasLc / 2));
                } else {
                    limiteInferiorLc.setValue(pontuacaMinimaLc);
                    limiteSuperiorLc.setValue(pontuacaMinimaLc + amplitudeFaixasLc);
                    pontReferenciaLc.setValue(limiteSuperiorLc.value);
                }
                limiteSuperiorAnteriorLc = limiteSuperiorLc.value;
            }

            console.log('# ', index, 'Limite inferior: ', limiteInferiorLc.value,
                'Limite Superior: ', limiteSuperiorLc.value,
                'Pontuação de referência: ', pontReferenciaLc.value);
        });
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/distribuicao']);
    }
}
