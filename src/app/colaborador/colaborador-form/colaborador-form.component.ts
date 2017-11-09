import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Colaborador } from './../colaborador.model';
import { Referencia } from './../../referencia/referencia.model';
import { Divisao } from './../../divisao/divisao.model';

import { ColaboradorService } from './../colaborador.service';
import { ReferenciaService } from './../../referencia/referencia.service';
import { DivisaoService } from './../../divisao/divisao.service';
import { FuncoesGlobais } from 'app/shared/app.funcoes-globais';
import { LoaderService } from 'app/shared/services/loader.service';

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
        private _divisaoService: DivisaoService,
        private loaderService: LoaderService,
		private mensagensHandler: MensagensHandler
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
        
        this.loaderService.setMsgLoading("Carregando ...");
		this.mensagensHandler.handleClearMessages();
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
        
        this.formColaborador.get('telefone').setValue(this.retiraCaracteres(this.formColaborador.get('telefone').value, "telefone"));
        console.log(this.formColaborador.get('telefone').value);

        let result, userValue = this.formColaborador.value;
        let atualizar: boolean;
            
        if (this.idResource) {
            atualizar = true;
            this.loaderService.setMsgLoading("Atualizando colaborador ...");
            result = this.colaboradorService.updateColaborador(this.idResource, userValue);
        } else {
            atualizar = false;
			this.loaderService.setMsgLoading("Salvando colaborador ...");
            result = this.colaboradorService.addColaborador(userValue);
        }

        result.subscribe(data => {
			if (atualizar) {
				this.mensagensHandler.handleSuccess("Colaborador atualizado com sucesso!");
			} else {
				this.mensagensHandler.handleSuccess("Colaborador salvo com sucesso!");
			}
			this.router.navigate(['colaborador']);
		}
		);
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

    retiraCaracteres(valor: string, campoForm: string): string {
        let campoFormatado: string = valor.toString().replace(/[`\\s+~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
        console.log(campoFormatado);
        return campoFormatado.replace(" ", "");
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