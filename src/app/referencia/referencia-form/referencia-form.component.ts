import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';
import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { LoaderService } from 'app/shared/services/loader.service';

import { Referencia } from './../referencia.model';
import { ReferenciaService } from './../referencia.service';

@Component({
    selector: 'mt-referencia-form',
    templateUrl: './referencia-form.component.html',
    styleUrls: ['./referencia-form.component.css']
})
export class ReferenciaFormComponent implements OnInit {

    formReferencia: FormGroup;
    title: string;
    referencia: Referencia = new Referencia();
    idResource: any;
    
    public maskData = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
    public maskValor = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/];


    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private referenciaService: ReferenciaService,
        private loaderService: LoaderService,
		private mensagensHandler: MensagensHandler
    ) {
        this.formReferencia = formBuilder.group({
            cargo: [null, Validators.required],
            num_referencia: [null, Validators.required],
            valor_referencia: [null, Validators.required]
            //dt_atualizacao: [null]
        })
    }

    hasErrors(): boolean {
        var hasErrors: boolean = false;
        for (var controlName in this.formReferencia.controls) {
            var control: AbstractControl = this.formReferencia.controls[controlName];
            if (!control.valid && !control.pristine) {
                hasErrors = true;
                break;
            }
        }
        return hasErrors;
    }

    ngOnInit() {
        
        this.loaderService.setMsgLoading("Carregando ...");
		this.mensagensHandler.handleClearMessages();
		        
        var id_referencia_fct_gfe = this.route.params.subscribe(params => {
            this.idResource = params['id_referencia_fct_gfe'];
            this.title = this.idResource ? 'Editar Referência FCT' : 'Nova Referência FCT';

            if (!this.idResource)
                return;

            this.referenciaService.getReferenciaId(this.idResource).subscribe(referencia => {

                referencia = this.referencia = referencia;
                    this.referencia.dt_atualizacao = this.dataFormatada(this.referencia.dt_atualizacao);
                    response => {
                        if (response.status == 404) {
                            this.router.navigate(['referencia'])
                        }
                    }
            })

        })
    }

    save() {
        let result, userValue = this.formReferencia.value;
        let atualizar: boolean;

        if (this.idResource) {
            atualizar = true;
            this.loaderService.setMsgLoading("Atualizando referência FCT ...");
            result = this.referenciaService.updateReferencia(this.idResource, userValue);
        } else {
            atualizar = false;
			this.loaderService.setMsgLoading("Salvando referência FCT ...");
            result = this.referenciaService.addReferencia(userValue);
        }
        result.subscribe(data => {
			if (atualizar) {
				this.mensagensHandler.handleSuccess("Referência atualizada com sucesso!");
			} else {
                this.mensagensHandler.handleSuccess("Referência salva com sucesso!");
			}
			this.router.navigate(['referencia']);
		}
		);
    }

    dataFormatada(data){
        let dtFormatada = new Date(data);
        return dtFormatada.toLocaleDateString();
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/referencia']);
    }
}