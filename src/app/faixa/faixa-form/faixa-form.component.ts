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
    qtdePessoas: number = 0;
    listFaixas: FormArray;
    
    public percentMask = [/\d/, /\d/];

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
                    let vrRateioPessoaCalculado = 0;
                    let qtdPessoasCalculado = (this.qtdePessoas || 0);

                    this.listFaixas.controls.map(function(data) {
                        data.get('percentualCalculado').setValue(((parseFloat(data.get('qtdePessoasFaixa').value) / data.get('qtdePessoasTotal').value)* 100));
                        data.get('valorTotalCalculado').setValue(((parseFloat(data.get('valorDistribuicao').value.replace("R$ ","")) * (data.get('percentualCalculado').value / 100)).toFixed(2)) || 0);
                        data.get('valorRateioPessoaCalculado').setValue((parseFloat(data.get('valorTotalCalculado').value) / qtdPessoasCalculado).toFixed(2) || 0);
                        vrRateioSomadoFaixa = ((vrRateioSomadoFaixa + parseFloat(data.get('valorRateioPessoaCalculado').value)) || 0);
                        data.get('valorRateioSomadoFaixa').setValue((vrRateioSomadoFaixa).toFixed(2));
                        qtdPessoasCalculado = (qtdPessoasCalculado - parseFloat(data.get('qtdePessoasFaixa').value));
                })  
            }
        );
        

        // carga dos Dados complementares
        this.getDistribuicao();
        this.getReferencia();
        // this.selecionaReferencia();
    }

    private getPessoasFaixaTotal(): void{

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
            percentualFixo: '00.00',
            valorTotalFixo: '0.00',
            valorRateioPessoa: '0.00',
            valorRateioSomado: '0.00',
            percentualCalculado: '0.00',
            valorTotalCalculado: '0.00',
            valorRateioPessoaCalculado: '0.00',
            valorRateioSomadoFaixa: '0.00',
            qtdePessoasTotal: this.qtdePessoas,
            qtdePessoasFaixa: faixas.qtde_pessoas,
            valorDistribuicao: this.formFaixa.get('valorDistribuicao').value
        });
    }

    save() {
        var result,
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

    selecionaReferencia(){
        //for() this.referencia
    }

    private calculaValores(): void{
        let vrRateioFixoFaixa = 0;
        let vrRateioPessoaFixo = 0;
        let totalPercFixo = 0;
        let qtdPessoasFixo = this.qtdePessoas;
        let tamanho = this.listFaixas.length;
        let index = 0;
        
        this.listFaixas.controls.map(function(data) {
            
            index = index + 1;
            totalPercFixo = (totalPercFixo + parseFloat(data.get('percentualFixo').value));

            if(totalPercFixo > 100){
                if(index == tamanho){
                    totalPercFixo = (totalPercFixo - data.get('percentualFixo').value);
                    totalPercFixo = (100 - totalPercFixo);
                    if (totalPercFixo < 10)
                        data.get('percentualFixo').setValue('0' + totalPercFixo);
                    else    
                        data.get('percentualFixo').setValue(totalPercFixo);
                } else{
                    totalPercFixo = 100 - (totalPercFixo - data.get('percentualFixo').value);
                    if (totalPercFixo < 10)
                        data.get('percentualFixo').setValue('0' + totalPercFixo);
                    else    
                        data.get('percentualFixo').setValue(totalPercFixo);
                    totalPercFixo = 100;                        
                }
            }             
            
            data.get('valorTotalFixo').setValue(((parseFloat((data.get('valorDistribuicao').value.replace("R$ ","")) || 0) * (data.get('percentualFixo').value / 100)).toFixed(2)) || 0);
            data.get('valorRateioPessoa').setValue((parseFloat(data.get('valorTotalFixo').value) / qtdPessoasFixo).toFixed(2) || 0);
            vrRateioFixoFaixa = ((vrRateioFixoFaixa + parseFloat(data.get('valorRateioPessoa').value)) || 0);
            data.get('valorRateioSomado').setValue((vrRateioFixoFaixa).toFixed(2));
            qtdPessoasFixo = (qtdPessoasFixo - parseFloat(data.get('qtdePessoasFaixa').value));
        })
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/faixa']);
    }
}