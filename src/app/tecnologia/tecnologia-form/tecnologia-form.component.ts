import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoaderService } from 'app/shared/services/loader.service';

import { Tecnologia } from './../tecnologia.model';
import { TecnologiaService } from './../tecnologia.service';

@Component({
    selector: 'app-tecnologia-form',
    templateUrl: './tecnologia-form.component.html',
    styleUrls: ['./tecnologia-form.component.css']
})
export class TecnologiaFormComponent implements OnInit {
    formTecnologia: FormGroup;
    title: string;
    tecnologia: Tecnologia = new Tecnologia();
    idResource: any;

    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private tecnologiaService: TecnologiaService,
        private loaderService: LoaderService,
		private mensagensHandler: MensagensHandler
    ) {
        this.formTecnologia = formBuilder.group({
            tipo: [null, [Validators.required]],
            nome: [null, Validators.required],
            descricao: [null, Validators.required]
        })
    }

    hasErrors(): boolean {
        var hasErrors: boolean = false;
        for (var controlName in this.formTecnologia.controls) {
            var control: AbstractControl = this.formTecnologia.controls[controlName];
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
		
        var id_tecnologia = this.route.params.subscribe(params => {
            this.idResource = params['id_tecnologia'];
            this.title = this.idResource ? 'Editar Tecnologia' : 'Nova Tecnologia';

            if (!this.idResource)
                return;

            this.tecnologiaService.getTecnologiaId(this.idResource).subscribe(tecnologia => {
                tecnologia = this.tecnologia = tecnologia
                    response => {
                        if (response.status == 404) {
                            this.router.navigate(['tecnologia'])
                        }
                    }
            })

        })
    }

    save() {
        let result, userValue = this.formTecnologia.value;
        let atualizar: boolean;

        if (this.idResource) {
            atualizar = true;
            this.loaderService.setMsgLoading("Atualizando tecnologia ...");
            result = this.tecnologiaService.updateTecnologia(this.idResource, userValue);

        } else {
            atualizar = false;
			this.loaderService.setMsgLoading("Salvando tecnologia ...");
            result = this.tecnologiaService.addTecnologia(userValue);
        }
        result.subscribe(data => {
			if (atualizar) {
				this.mensagensHandler.handleSuccess("Tecnologia atualizada com sucesso!");
			} else {
                this.mensagensHandler.handleSuccess("Tecnologia salva com sucesso!");
			}
			this.router.navigate(['tecnologia']);
		}
		);
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/tecnologia']);
    }
}