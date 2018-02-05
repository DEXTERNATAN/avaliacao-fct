import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoaderService } from 'app/shared/services/loader.service';

import { Complexidade } from './../complexidade.model';
import { ComplexidadeService } from './../complexidade.service';

@Component({
    selector: 'mt-complexidade-form',
    templateUrl: './complexidade-form.component.html',
    styleUrls: ['./complexidade-form.component.css']
})
export class ComplexidadeFormComponent implements OnInit {

    formComplexidade: FormGroup;
    title: string;
    complexidade: Complexidade = new Complexidade();
    idResource: any;

    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private complexidadeService: ComplexidadeService,
        private loaderService: LoaderService,
        private mensagensHandler: MensagensHandler
    ) {
        this.formComplexidade = formBuilder.group({

            atributo: [null, Validators.required],
            classificacao: [null, Validators.required],
            tipo: [null, Validators.required],
            nome: [null, Validators.required],
            descricao: [null, Validators.required]
        })
    }

    hasErrors(): boolean {
        let hasErrors = false;
        for (var controlName in this.formComplexidade.controls) {
            var control: AbstractControl = this.formComplexidade.controls[controlName];
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

        let id_complexidade = this.route.params.subscribe(params => {
            this.idResource = params['id_complexidade'];
            this.title = this.idResource ? 'Editar Complexidade' : 'Nova Complexidade';

            if (!this.idResource) {
                return;
            }

            this.complexidadeService.getComplexidadeId(this.idResource).subscribe(complexidade => {
                complexidade = this.complexidade = complexidade;
                response => {
                    if (response.status == 404) {
                        this.router.navigate(['complexidade']);
                    }
                }
            });
        });
    }

    save() {
        let result, userValue = this.formComplexidade.value;
        let atualizar: boolean;

        if (this.idResource) {
            atualizar = true;
            this.loaderService.setMsgLoading('Atualizando complexidade ...');
            result = this.complexidadeService.updateComplexidade(this.idResource, userValue);
        } else {
            atualizar = false;
            this.loaderService.setMsgLoading('Salvando complexidade ...');
            result = this.complexidadeService.addComplexidade(userValue);
        }

        result.subscribe(data => {
            if (atualizar) {
                this.mensagensHandler.handleSuccess('Complexidade atualizada com sucesso!');
            } else {
                this.mensagensHandler.handleSuccess('Complexidade salva com sucesso!');
            }
            this.router.navigate(['complexidade']);
        });
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/complexidade']);
    }

    setNomeComplexidade(id: string) {
        switch (id) {
            case '1':
                {
                    this.complexidade.nome = 'Moderada';
                    break;
                }
            case '2':
                {
                    this.complexidade.nome = 'Alta';
                    break;
                }
            case '3': {
                this.complexidade.nome = 'Altíssima';
                break;
            }
            default: {
                break;
            }
        }
    }
}
