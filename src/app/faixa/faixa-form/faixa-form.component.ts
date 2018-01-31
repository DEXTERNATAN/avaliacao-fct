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
    idResource: any;
    distribuicao: Distribuicao[] = [];
    referencia: Referencia[] = [];
    qtdePessoas: number = 0;
    listFaixas: FormArray;

    // valorTotalFixo: any[];
    // valorRateioPessoa: any[];
    // valorRateioSomado: any[];
    // percentualCalculado: any[];
    // valorTotalCalculado: any[];
    // valorRateioPessoaCalculado: any[];
    // valorRateioSomadoFaixa: any[];
    // qtdePessoas: any;
    // qtdePessoasFaixa: any[];
    // valorDistribuicao: any;

    public percentMask = [/\d/, /\d/, '.', /\d/, /\d/];

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private faixaService: FaixaService,
        private distribuicaoService: DistribuicaoService,
        private referenciaService: ReferenciaService
    ) { }

    // hasErrors(): boolean {
    //     var hasErrors: boolean = false;
    //     for (var controlName in this.formFaixa.controls) {
    //         var control: AbstractControl = this.formFaixa.controls[controlName];
    //         if (!control.valid && !control.pristine) {
    //             hasErrors = true;
    //             break;
    //         }
    //     }
    //     return hasErrors;
    // }

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

                console.log("valor percentual Calculado: ", this.listFaixas.controls);
                this.listFaixas.controls.map(function(data) {
                
                    console.log("valor percentual Calculado default: ", data.get('percentualCalculado').value);
              
                    let percCalculado = (parseInt(data.get('qtdePessoasFaixa').value) / data.get('qtdePessoasTotal').value).toFixed(2);
                    data.get('percentualCalculado').setValue(percCalculado);
                    console.log("valor percentual Calculado: ", data.get('percentualCalculado').value);  

                })  
            }
        );
        

        // carga dos Dados complementares
        this.getDistribuicao();
        this.getReferencia();
        // this.selecionaReferencia();
        // this.calculaValores();
    }

    getPessoasFaixaTotal(){

        this.faixaService.getFaixa().subscribe(
            faixas => {
                faixas.forEach(fxs => {
                    this.qtdePessoas = (this.qtdePessoas + parseFloat(fxs.qtde_pessoas));    
                });
            }
        );
    }

    getListaFaixas(formFaixas) {
        return formFaixas.get('listFaixas').controls;
    }

    addItemFaixa(faixas: Faixa): void {
        this.listFaixas = this.formFaixa.get('listFaixas') as FormArray;
        this.listFaixas.push(this.createItemFaixa(faixas));
    }

    createItemFaixa(faixas: Faixa): FormGroup {
        return this.formBuilder.group({
            percentualFixo: '00.00',
            valorTotalFixo: '0.00',
            valorRateioPessoa: '0.00',
            valorRateioSomado: '0.00',
            percentualCalculado: '50.50',
            valorTotalCalculado: '0.00',
            valorRateioPessoaCalculado: '0.00',
            valorRateioSomadoFaixa: '0.00',
            qtdePessoasTotal: this.qtdePessoas,
            qtdePessoasFaixa: faixas.qtde_pessoas,
            valorDistribuicao: '0.00'
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
            // console.log(distribuicao);

            distribuicao.map(distVlr => {
                this.formFaixa.get('valorDistribuicao').setValue(distVlr.valor);
            });

            this.distribuicao = distribuicao;
            this.calculaValores();
            
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

    calculaValores(){
    
        // let i, j = 0;
        // this.qtdePessoas = 0;


        // this.faixaList.forEach(fxs => {
        //     this.qtdePessoas = (this.qtdePessoas + parseFloat(fxs.qtde_pessoas));
        // });

        // for (i = 0; i < this.faixaList.length; i++) {
        
        // this.qtdePessoas = (this.qtdePessoas + this.faixaList[i].qtde_pessoas);
        // this.qtdePessoasFaixa[i] = this.faixaList[i].qtde_pessoas;
        // this.valorRateioSomadoFaixa[i] = 0;

            /*if(this.formFaixa.get('percentualFixo').value != ''){
            
                //Valor Fixo
                this.valorTotalFixo[i] = (this.formFaixa.get('percentualFixo').value / 100);
                this.valorTotalFixo[i] = (this.formFaixa.get('valorDistribuicao').value.replace("R$ ","") * this.valorTotalFixo[i]);
                this.valorTotalFixo[i] = (this.valorTotalFixo[i]).toFixed(2);
                this.valorRateioPessoa[i] = (this.valorTotalFixo[i] / this.qtdePessoas).toFixed(2);
                this.valorRateioSomado[i] = (this.valorRateioSomado[i-j] + this.valorRateioPessoa[i]).toFixed(2);
            } else{
            
                this.valorTotalFixo[i] = 0;
                this.valorRateioPessoa[i] = 0;
                this.valorRateioSomado[i] = 0;
    
            }*/
        
            //Valor Calculado
            // this.percentualCalculado[i] = (this.qtdePessoasFaixa[i] / this.qtdePessoas).toFixed(2);
            // this.valorTotalCalculado[i] = (this.formFaixa.get('valorDistribuicao').value.replace("R$ ","") * this.percentualCalculado[i]).toFixed(2);
            // this.valorRateioPessoaCalculado[i] = (this.valorTotalCalculado[i] / this.qtdePessoas).toFixed(2);
            // this.valorRateioSomadoFaixa[i] = (this.valorRateioSomadoFaixa[i-j] + parseFloat(this.valorRateioPessoaCalculado[i])).toFixed(2);
            // this.percentualCalculado[i] = (this.percentualCalculado[i] * 100).toFixed(2);
            // j = 1;
        // }    
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/faixa']);
    }
}