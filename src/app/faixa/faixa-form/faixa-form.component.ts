import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import 'rxjs/Rx';

import { Faixa } from './../faixa.model';
import { Distribuicao } from './../../distribuicao/distribuicao.model';
import { Referencia } from './../../referencia/referencia.model';

import { FaixaService } from './../faixa.service';
import { DistribuicaoService } from './../../distribuicao/distribuicao.service';
import { ReferenciaService } from './../../referencia/referencia.service';
import { FormControl } from '@angular/forms/src/model';

@Component({
    selector: 'mt-faixa-form',
    templateUrl: './faixa-form.component.html',
    styleUrls: ['./faixa-form.component.css']
})
export class FaixaFormComponent implements OnInit {

    formFaixa: FormGroup;
    title: string;
    faixa: Faixa = new Faixa();
    faixaList: Faixa[] = [];
    idResource: string;
    distribuicao: Distribuicao[] = [];
    referencia: Referencia[] = [];
    qtdePessoas = 0;
    listFaixas: FormArray;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private faixaService: FaixaService,
        private distribuicaoService: DistribuicaoService,
        private referenciaService: ReferenciaService
    ) { }

     ngOnInit() {

        this.formFaixa = this.formBuilder.group({
            referencia_fct: [],
            percentual_fixo: [],
            valorDistribuicao: '',
            percentualFixo: [],
            assumirPercCalculado: false,
            listFaixas: this.formBuilder.array([])
        });

        this.getPessoasFaixaTotal();

        this.faixaService.getFaixa().subscribe(
            faixas => {
                this.faixaList = faixas;
                faixas.forEach(fxs => {
                    this.addItemFaixa(fxs);
                });

            },
            response => {
                if (response.status === 404) {
                    this.router.navigate(['faixa'])
                }
            },
            () => {
                    let vrRateioSomadoFaixa = 0;
                    let qtdPessoasCalculado = (this.qtdePessoas || 0);

                    this.listFaixas.controls.map(function(data) {

                        let vlrPercentCalculadoLc = data.get('percentualCalculado');
                        let vlrQtdePessoasFaixaLc = data.get('qtdePessoasFaixa');
                        let vlrQtdePessoasTotalLc = data.get('qtdePessoasTotal');
                        let vlrTotalCalculadoLc = data.get('valorTotalCalculado');
                        let vlrDistribuicaoLc = data.get('valorDistribuicao');
                        let vlrRateioPessoaCalculadoLc = data.get('valorRateioPessoaCalculado');
                        let vlrRateioSomadoFaixaLc = data.get('valorRateioSomadoFaixa');

                        vlrPercentCalculadoLc.setValue(((parseFloat(vlrQtdePessoasFaixaLc.value) / vlrQtdePessoasTotalLc.value) * 100));
                        vlrTotalCalculadoLc.setValue(((parseFloat(vlrDistribuicaoLc.value.replace('R$ ', '')) *
                                                                                 (vlrPercentCalculadoLc.value / 100)).toFixed(2)) || 0);
                        vlrRateioPessoaCalculadoLc.setValue((parseFloat(vlrTotalCalculadoLc.value) / qtdPessoasCalculado).toFixed(2) || 0);
                        vrRateioSomadoFaixa = ((vrRateioSomadoFaixa + parseFloat(vlrRateioPessoaCalculadoLc.value)) || 0);
                        vlrRateioSomadoFaixaLc.setValue((vrRateioSomadoFaixa).toFixed(2));
                        qtdPessoasCalculado = (qtdPessoasCalculado - parseFloat(vlrQtdePessoasFaixaLc.value));
                });
            }
        );

        // carga dos Dados complementares
        this.getDistribuicao();
        this.getReferencia();
        // this.selecionaReferencia();

        this.formFaixa.get('listFaixas').valueChanges
        .debounceTime(400)
        .subscribe(value => {
            this.calculaValores();
         });
    }

    private getPessoasFaixaTotal(): void {

        this.faixaService.getFaixa().subscribe(
            faixas => {
                faixas.forEach(fxs => {
                    this.qtdePessoas = (this.qtdePessoas + parseFloat(fxs.qtde_pessoas));
                });
            }
        );
    }

    getListaFaixas(formFaixas): FormControl {
        return formFaixas.get('listFaixas').controls;
    }

    private addItemFaixa(faixas: Faixa): void {
        this.listFaixas = this.formFaixa.get('listFaixas') as FormArray;
        this.listFaixas.push(this.createItemFaixa(faixas));
    }

    private createItemFaixa(faixas: Faixa): FormGroup {
        return this.formBuilder.group({
            percentualFixo: '00',
            valorTotalFixo: '0.00',
            valorRateioPessoa: '0.00',
            valorRateioSomado: '0.00',
            percentualCalculado: '00',
            valorTotalCalculado: '0.00',
            valorRateioPessoaCalculado: '0.00',
            valorRateioSomadoFaixa: '0.00',
            qtdePessoasTotal: this.qtdePessoas,
            qtdePessoasFaixa: faixas.qtde_pessoas,
            valorDistribuicao: this.formFaixa.get('valorDistribuicao').value
        });
    }

    save() {
        let result,
            userValue = this.formFaixa.value;

        if (this.idResource) {
            result = this.faixaService.updateFaixa(this.idResource, userValue);
        } else {
            result = this.faixaService.addFaixa(userValue);
        }

        result.subscribe(data => this.router.navigate(['faixa']));
    }

    getDistribuicao() {

        this.distribuicaoService.getDistribuicao().subscribe(distribuicao => {
            distribuicao.map(distVlr => {
                this.formFaixa.get('valorDistribuicao').setValue(distVlr.valor);
            });
            this.distribuicao = distribuicao;
        });
    }

    getReferencia() {
        this.referenciaService.getReferencia().subscribe(referencia => {
            this.referencia = referencia;
        });
    }

    selecionaReferencia() {
        // for() this.referencia
    }

    private calculaValores(): void {
        let vrRateioFixoFaixa = 0;
        let totalPercFixo = 0;
        let qtdPessoasFixo = this.qtdePessoas;
        let tamanho = this.listFaixas.length;
        let index = 0;

        this.listFaixas.controls.map(function(data) {

            let vlrTotalFixoLc = data.get('valorTotalFixo');
            let vlrDistribuicaoLc = data.get('valorDistribuicao');
            let vlrPercentFixoLc = data.get('percentualFixo');
            let vlrRateioPessoa = data.get('valorRateioPessoa');
            let vlrRateioSomado = data.get('valorRateioSomado');
            let qtdePessoasFaixa = data.get('qtdePessoasFaixa');

            index = index + 1;
            totalPercFixo = (totalPercFixo + parseFloat(vlrPercentFixoLc.value));

            if (totalPercFixo > 100) {
                if (index === tamanho) {
                    totalPercFixo = (totalPercFixo - vlrPercentFixoLc.value);
                    totalPercFixo = (100 - totalPercFixo);
                    if (totalPercFixo < 10) {
                        vlrPercentFixoLc.setValue('0' + totalPercFixo);
                    }else {
                        vlrPercentFixoLc.setValue(totalPercFixo);
                    }
                } else {
                    totalPercFixo = 100 - (totalPercFixo - vlrPercentFixoLc.value);
                    if (totalPercFixo < 10) {
                        vlrPercentFixoLc.setValue('0' + totalPercFixo);
                    } else {
                        vlrPercentFixoLc.setValue(totalPercFixo);
                    }
                    totalPercFixo = 100;
                }
            }

            vlrTotalFixoLc.setValue(((parseFloat((vlrDistribuicaoLc.value.replace('R$ ', '')) || 0) *
                                                                            (vlrPercentFixoLc.value / 100)).toFixed(2)) || 0);
            vlrRateioPessoa.setValue((parseFloat(vlrTotalFixoLc.value) / qtdPessoasFixo).toFixed(2) || 0);
            vrRateioFixoFaixa = ((vrRateioFixoFaixa + parseFloat(vlrRateioPessoa.value)) || 0);
            vlrRateioSomado.setValue((vrRateioFixoFaixa).toFixed(2));
            qtdPessoasFixo = (qtdPessoasFixo - parseFloat(qtdePessoasFaixa.value));
        });
    }

    habDesCamposPercent(): void {

        this.listFaixas.controls.map(function(data) {

            console.log(' Assumir percentualFixo: ', data.get('percentualFixo').enabled);

            if (data.get('percentualFixo').enabled) {
                data.get('percentualFixo').disable;
            } else {
                data.get('percentualFixo').enable;
                console.log(' Assumir percentualFixo disabled: ', data.get('percentualFixo').disabled);
            }
        });
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/faixa']);
    }
}
