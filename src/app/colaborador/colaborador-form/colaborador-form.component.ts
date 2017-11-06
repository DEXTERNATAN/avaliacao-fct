import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Colaborador } from './../colaborador.model';
import { Referencia } from './../../referencia/referencia.model';
import { Divisao } from './../../divisao/divisao.model';

import { ColaboradorService } from './../colaborador.service';
import { ReferenciaService } from './../../referencia/referencia.service';
import { DivisaoService } from './../../divisao/divisao.service';

@Component({
    selector: 'app-colaborador-form',
    templateUrl: './colaborador-form.component.html',
    styleUrls: ['./colaborador-form.component.css']
})
export class ColaboradorFormComponent implements OnInit {
    formColaborador: FormGroup;
    title: string;
    colaborador: Colaborador = new Colaborador();
    idResource: any;
    Referencia: Referencia[] = [];
    Divisao: Divisao[] = [];
    public MaskTel =  ['(', /[1-9]/, /\d/, ')', ' ', /\d/ , /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    
    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private colaboradorService: ColaboradorService,
        private _referenciaService: ReferenciaService,
        private _divisaoService: DivisaoService
    ) {
        this.formColaborador = formBuilder.group({

            nome: [null, [Validators.required]],
            matricula: [null, Validators.required],
            telefone: [null, Validators.required],
            especialidade: [null, Validators.required],
            salario: [null, Validators.required],
            percentual_salario: [null, Validators.required],
            TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe: [null, Validators.required],
            TB_DIVISAO_id_divisao: [null, Validators.required],
            TB_ACESSO_id_acesso: [null]
        })
    }

    ngOnInit() {
        //console.debug('instanciacao: ', this.colaborador);
        this.getReferencia();
        this.getDivisao();

        var idColaborador = this.route.params.subscribe(params => {
            this.idResource = params['idColaborador'];
            this.title = this.idResource ? 'Editar Colaborador' : 'Novo Colaborador';

            if (!this.idResource)
                return;

            this.colaboradorService.getColaboradorId(this.idResource).subscribe(colaborador => {
                colaborador = this.colaborador = colaborador
                    response => {
                        if (response.status == 404) {
                            this.router.navigate(['colaborador'])
                        }
                    }
            })
        })
    }

    save() {
        var result,
            userValue = this.formColaborador.value;

        if (this.idResource) {
            result = this.colaboradorService.updateColaborador(this.idResource, userValue);
        } else {
            result = this.colaboradorService.addColaborador(userValue);
        }

        result.subscribe(data => this.router.navigate(['colaborador']));
    }

    getReferencia(){
        this._referenciaService.getReferencia().subscribe(referencias => {
            this.Referencia = referencias
        })
    }

    getDivisao(){
        this._divisaoService.getDivisao().subscribe(divisoes => {
            this.Divisao = divisoes
        })
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/colaborador']);
    }

    hasErrors(): boolean {
        var hasErrors: boolean = false;
        for (var controlName in this.formColaborador.controls) {
            var control: AbstractControl = this.formColaborador.controls[controlName];
            if (!control.valid && !control.pristine) {
                hasErrors = true;
                break;
            }
        }
        return hasErrors;
    }
}