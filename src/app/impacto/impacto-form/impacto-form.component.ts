import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { LoaderService } from 'app/shared/services/loader.service';

import { Impacto } from './../impacto.model';
import { ImpactoService } from './../impacto.service';

@Component({
    selector: 'mt-impacto-form',
    templateUrl: './impacto-form.component.html',
    styleUrls: ['./impacto-form.component.css']
})
export class ImpactoFormComponent implements OnInit {

    formImpacto: FormGroup;
    title: string;
    impacto: Impacto = new Impacto();
    idResource: any;

    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private impactoService: ImpactoService,
        private loaderService: LoaderService,
        private mensagensHandler: MensagensHandler
    ) {
        this.formImpacto = formBuilder.group({
            atributo: [null, Validators.required],
            classificacao: [null, Validators.required],
            tipo: [null, Validators.required],
            nome: [null, Validators.required],
            descricao: [null, Validators.required]
        });
    }

    hasErrors(): boolean {
        let hasErrors = false;
        for (let controlName in this.formImpacto.controls) {
            let control: AbstractControl = this.formImpacto.controls[controlName];
            if (!control.valid && !control.pristine) {
                hasErrors = true;
                break;
            }
        }
        return hasErrors;
    }

    ngOnInit() {

        this.loaderService.setMsgLoading('Carregando ...');
        this.mensagensHandler.handleClearMessages();

        let id_impacto = this.route.params.subscribe(params => {
            this.idResource = params['id_impacto'];
            this.title = this.idResource ? 'Editar o Impacto' : 'Novo Impacto';

            if (!this.idResource) {
                return;
            }

            this.impactoService.getImpactoId(this.idResource).subscribe(impacto => {
                impacto = this.impacto = impacto;
                // console.log(impacto.id_impacto),
                response => {
                    if (response.status == 404) {
                        this.router.navigate(['impacto'])
                    }
                }
            });
        });
    }

    save() {
        let result, userValue = this.formImpacto.value;
        let atualizar: boolean;

        if (this.idResource) {
            atualizar = true;
            this.loaderService.setMsgLoading('Atualizando impacto ...');
            result = this.impactoService.updateImpacto(this.idResource, userValue);
        } else {
            atualizar = false;
            this.loaderService.setMsgLoading('Salvando impacto ...');
            result = this.impactoService.addImpacto(userValue);
        }

        result.subscribe(data => {
            if (atualizar) {
                this.mensagensHandler.handleSuccess('Impacto atualizado com sucesso!');
            } else {
                this.mensagensHandler.handleSuccess('Impacto salvo com sucesso!');
            }
            this.router.navigate(['impacto']);
        }
        );
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/impacto']);
    }

    setNomeImpacto(id: string) {
        switch (id) {
            case '1':
                {
                    this.impacto.nome = 'Relevante';
                    break;
                }
            case '2':
                {
                    this.impacto.nome = 'Muito';
                    break;
                }
            case '3': {
                this.impacto.nome = 'Altamente';
                break;
            }
            default: {
                break;
            }
        }
    }
}
