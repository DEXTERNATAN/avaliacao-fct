import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

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
    idResource: any;
    distribuicao: Distribuicao[] = [];
    referencia: Referencia[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private faixaService: FaixaService,
        private distribuicaoService: DistribuicaoService,
        private referenciaService: ReferenciaService
    ) {}
    
    hasErrors(): boolean {
        var hasErrors: boolean = false;
        for (var controlName in this.formFaixa.controls) {
            var control: AbstractControl = this.formFaixa.controls[controlName];
            if (!control.valid && !control.pristine) {
                hasErrors = true;
                break;
            }
        }
        return hasErrors;
    }

    ngOnInit() {
        this.formFaixa = this.formBuilder.group({
            referencia_fct: [],
            percentual_fixo: []
        })

        var id_resultado = this.route.params.subscribe(params => {
            this.idResource = params['id_faixa'];
            this.title = this.idResource ? 'Editar Faixa' : 'Nova Faixa';

            if (!this.idResource)
                return;
               
            this.faixaService.getFaixaId(this.idResource).subscribe(faixa => {
                faixa = this.faixa = faixa

                    response => {
                        if (response.status == 404) {
                            this.router.navigate(['faixa'])
                        }
                    }
            })

        })
    
        //carga dos Dados complementares
        this.getDistribuicao();
        this.getReferencia();
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
            this.distribuicao = distribuicao;
        });
    }

    getReferencia() {
        this.referenciaService.getReferencia().subscribe(referencia => {
            this.referencia = referencia;
        });
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/faixa']);
    }
}