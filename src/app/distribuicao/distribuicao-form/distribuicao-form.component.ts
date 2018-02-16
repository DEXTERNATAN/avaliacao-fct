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
    faixaDist: Distribuicao[] = [];
    faixa: Faixa [] = [];
    faixaBoolean = false;
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
            idDistribuicao: null,
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
            distribuicao => {
                this.faixaDist = distribuicao;
                distribuicao.forEach(fxs => {
                    this.formDistribuicao.patchValue({
                        idDistribuicao: fxs.id_distribuicao,
                        valor: fxs.valor,
                        pontuacao_minima: fxs.pontuacao_minima,
                        pontuacao_maxima: fxs.pontuacao_maxima,
                        qtde_faixas: fxs.qtde_faixas,
                        dt_registro: fxs.dt_registro
                    });
                });
                this.calcularDiferencaPontuacao();
            },
            response => {
                if (response.status === 404) {
                    this.router.navigate(['faixa']);
                }
            },
            () => {}
        );

        this.formDistribuicao.get('qtde_faixas').valueChanges.subscribe( /* <- does work */
            changes => {
                this.calcularAmplitude(false);
            }
        );
    }

    save() {

        let idResource = this.formDistribuicao.get('idDistribuicao').value;
        this.calculaFaixa();

        // Setando a nova data para salvar no banco
        this.formDistribuicao.get('dt_registro').setValue(null);
        let valor = this.formDistribuicao.get('valor');
        valor.setValue(parseFloat(valor.value.replace('R$ ', '')));

        // Chamanda para edicao e cadastro no banco
        let result, userValue = this.formDistribuicao.value;
        let atualizar: boolean;

        console.log('listFaixas.controls.length > ', this.listFaixas.controls.length);

        if (idResource) {
            atualizar = true;
            this.loaderService.setMsgLoading('Atualizando a distribuição ...');
            result = this.distribuicaoService.updateDistribuicao(idResource, userValue);

            for (let i = 0; i < this.listFaixas.controls.length; i++) {

                userValue = this.listFaixas.value[i];
                this.loaderService.setMsgLoading('Atualizando a faixa ...' + [ i + 1 ]);
                this.faixaService.addFaixa(userValue).subscribe(data => {});
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

    private calcularDiferencaPontuacao(): void {
        this.pontuacaMinimaLc = this.formDistribuicao.get('pontuacao_minima').value;
        this.diferenca = (this.formDistribuicao.get('pontuacao_maxima').value -
                          this.formDistribuicao.get('pontuacao_minima').value);

        this.formDistribuicao.get('diferenca').setValue(parseFloat(this.diferenca.toFixed(2)));
    }

    private calcularAmplitude(opcao: boolean): void {

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
            limite_inferior: '0.00',
            limite_superior: '0.00',
            pontuacao_referencia: '0.00',
            qtde_pessoas: 0,
            valor_rateio_pessoa: 0,
            percentual: 0,
            TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe: 1,
            TB_DISTRIBUICAO_id_distribuicao: 1
        });
    }

    private calculaFaixa(): void {

        this.buscaFaixas();

        let tamanhoFaixa: number = this.formDistribuicao.get('qtde_faixas').value;
        this.faixaDist.forEach(fxs => {
            for (let i = 1; i <= tamanhoFaixa; i++) {
                this.addItemFaixa(fxs);
            }
        });

        this.pontuacaMinimaLc = this.formDistribuicao.get('pontuacao_minima').value;
        this.diferenca = (this.formDistribuicao.get('pontuacao_maxima').value -
                            this.formDistribuicao.get('pontuacao_minima').value);

        this.formDistribuicao.get('diferenca').setValue(parseFloat(this.diferenca.toFixed(2)));

        let index = 0;
        let tamanho: number = this.listFaixas.controls.length;
        let limiteSuperiorAnteriorLc = 0.00;
        let pontuacaMinimaLc = this.pontuacaMinimaLc;
        let amplitudeFaixasLc = (this.diferenca / tamanhoFaixa);

        this.listFaixas.controls.map(function (data) {

            index = index + 1;
            let limiteInferiorLc = data.get('limite_inferior');
            let limiteSuperiorLc = data.get('limite_superior');
            let pontReferenciaLc = data.get('pontuacao_referencia');

            if (index === tamanho) {
                limiteInferiorLc.setValue(parseFloat(limiteSuperiorAnteriorLc.toFixed(2)));
                limiteSuperiorLc.setValue(parseFloat(((limiteInferiorLc.value + amplitudeFaixasLc) + 0.01).toFixed(2)));
                pontReferenciaLc.setValue(parseFloat(limiteInferiorLc.value.toFixed(2)));
            } else {
                if (index > 1) {
                    limiteInferiorLc.setValue(parseFloat(limiteSuperiorAnteriorLc.toFixed(2)));
                    limiteSuperiorLc.setValue(parseFloat((limiteInferiorLc.value + amplitudeFaixasLc).toFixed(2)));
                    pontReferenciaLc.setValue(parseFloat((limiteInferiorLc.value + (amplitudeFaixasLc / 2)).toFixed(2)));
                } else {
                    limiteInferiorLc.setValue(parseFloat(pontuacaMinimaLc.toFixed(2)));
                    limiteSuperiorLc.setValue(parseFloat((pontuacaMinimaLc + amplitudeFaixasLc).toFixed(2)));
                    pontReferenciaLc.setValue(parseFloat(limiteSuperiorLc.value.toFixed(2)));
                }
                limiteSuperiorAnteriorLc = parseFloat(limiteSuperiorLc.value.toFixed(2));
            }
        });
    }

    buscaFaixas() {
        this.faixaService.getFaixa().subscribe(
            data => {
                data.forEach(elFaixa => {
                    this.faixaService.deleteFaixa(elFaixa.id_faixa).subscribe();
                });
            });
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/distribuicao']);
    }
}
