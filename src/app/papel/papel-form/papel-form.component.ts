import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoaderService } from 'app/shared/services/loader.service';

import { Papel } from './../papel.model';
import { PapelService } from './../papel.service';

@Component({
    selector: 'app-papel-form',
    templateUrl: './papel-form.component.html',
    styleUrls: ['./papel-form.component.css']
})
export class PapelFormComponent implements OnInit {
    formPapel: FormGroup;
    title: string;
    papeis: Papel = new Papel();
    idResource: any;

    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private papelService: PapelService,
        private loaderService: LoaderService,
		private mensagensHandler: MensagensHandler
    ) {
        this.formPapel = formBuilder.group({
            tipo: [null, [Validators.required]],
            nome: [null, Validators.required],
            descricao: [null, Validators.required]
        })
    }

    hasErrors(): boolean {
        var hasErrors: boolean = false;
        for (var controlName in this.formPapel.controls) {
            var control: AbstractControl = this.formPapel.controls[controlName];
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

        var id_papel = this.route.params.subscribe(params => {
            this.idResource = params['id_papel'];
            this.title = this.idResource ? 'Editar Papel' : 'Novo Papel';

            if (!this.idResource)
                return;

            this.papelService.getPapelId(this.idResource).subscribe(papel => {
                papel = this.papeis = papel
                //console.log(papel.id_papel),
                    response => {
                        if (response.status == 404) {
                            this.router.navigate(['papel'])
                        }
                    }
            })
        })
    }

    save() {
        let result, userValue = this.formPapel.value;
        let atualizar: boolean;

        if (this.idResource) {
            atualizar = true;
            this.loaderService.setMsgLoading("Atualizando papel ...");
            result = this.papelService.updatePapel(this.idResource, userValue);
        } else {
            atualizar = false;
			this.loaderService.setMsgLoading("Salvando papel ...");
            result = this.papelService.addPapel(userValue);
        }
        result.subscribe(data => {
			if (atualizar) {
				this.mensagensHandler.handleSuccess("Papel atualizado com sucesso!");
			} else {
                this.mensagensHandler.handleSuccess("Papel salvo com sucesso!");
			}
			this.router.navigate(['papel']);
		}
		);
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/papel']);
    }
}