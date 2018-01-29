import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    valorTotalFixo1: any;
    valorRateioPessoa1: any;
    valorRateioSomado1: any;
    percentualCalculado1: any;
    valorTotalCalculado1: any;
    valorRateioPessoaCalculado1: any;
    valorRateioSomadoFaixa1: any;
    qtdePessoas: any;
    qtdePessoasFaixa: any;
    valorDistribuicao: any;

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
            percentualFixo1: ''
        });

        // var id_resultado = this.route.params.subscribe(params => {
        //     this.idResource = params['id_faixa'];
        //     this.title = this.idResource ? 'Editar Faixa' : 'Nova Faixa';

        //     if (!this.idResource)
        //         return;

        this.faixaService.getFaixa().subscribe(
            faixas => {
                this.faixaList = faixas;
            },
            response => {
                if (response.status === 404) {
                    this.router.navigate(['faixa'])
                }
            }
        );

        // })

        // carga dos Dados complementares
        this.getDistribuicao();
        this.getReferencia();
        //this.selecionaReferencia();
        this.calculaValores();
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
                this.valorDistribuicao = distVlr.valor;
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

    calculaValores(){
    
        this.qtdePessoas = 5;
        this.qtdePessoasFaixa = 2;
        this.valorRateioSomadoFaixa1 = 0;

        if(this.formFaixa.get('percentualFixo1').value != ''){
            
            //Valor Fixo
            this.valorTotalFixo1 = (this.formFaixa.get('percentualFixo1').value / 100);
            this.valorTotalFixo1 = (this.valorDistribuicao * this.valorTotalFixo1);
            this.valorTotalFixo1 = (this.valorTotalFixo1).toFixed(2);
            this.valorRateioPessoa1 = (this.valorTotalFixo1 / this.qtdePessoas).toFixed(2);
            this.valorRateioSomado1 = (this.valorRateioSomado1 + this.valorRateioPessoa1).toFixed(2);

        } else{
            
            this.valorTotalFixo1 = 0;
            this.valorRateioPessoa1 = 0;
            this.valorRateioSomado1 = 0;
    
        }
        
        //Valor Calculado
        this.percentualCalculado1 = (this.qtdePessoasFaixa / this.qtdePessoas).toFixed(2);


        console.log("valorDistribuicao >", this.valorDistribuicao);
        console.log("percentualCalculado1 > ", this.percentualCalculado1);

        this.valorTotalCalculado1 = (this.formFaixa.get('valorDistribuicao').value * this.percentualCalculado1).toFixed(2);

        console.log("valorTotalCalculado1 > ", this.valorTotalCalculado1);    

        this.valorRateioPessoaCalculado1 = (this.valorTotalCalculado1 / this.qtdePessoas).toFixed(2);

        console.log("valorRateioPessoaCalculado1 > ", this.valorRateioPessoaCalculado1);    

        this.valorRateioSomadoFaixa1 = (this.valorRateioSomadoFaixa1 + this.valorRateioSomadoFaixa1).toFixed(2);

        console.log("valorRateioSomadoFaixa1 > ", this.valorRateioSomadoFaixa1);    

        this.percentualCalculado1 = (this.percentualCalculado1 * 100);

    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/faixa']);
    }
}