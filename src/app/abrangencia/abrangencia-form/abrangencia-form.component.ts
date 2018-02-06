import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { LoaderService } from 'app/shared/services/loader.service';

import { Abrangencia } from './../abrangencia.model';
import { AbrangenciaService } from './../abrangencia.service';

@Component({
    selector: 'mt-abrangencia-form',
    templateUrl: './abrangencia-form.component.html',
    styleUrls: ['./abrangencia-form.component.css']
})
export class AbrangenciaFormComponent implements OnInit {

    formAbrangencia: FormGroup;
    title: string;
    abrangencia: Abrangencia = new Abrangencia();
    idResource: any;

    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private abrangenciaService: AbrangenciaService,
        private loaderService: LoaderService,
        private mensagensHandler: MensagensHandler
    ) {
        this.formAbrangencia = formBuilder.group({
            atributo: [null, Validators.required],
            classificacao: [null, Validators.required],
            tipo: [null, Validators.required],
            nome: [null, Validators.required],
            descricao: [null, Validators.required]
        });
    }

    hasErrors(): boolean {
        let hasErrors = false;

        for (var controlName in this.formAbrangencia.controls) {
            var control: AbstractControl = this.formAbrangencia.controls[controlName];
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

        let id_abrangencia = this.route.params.subscribe(params => {
            this.idResource = params['id_abrangencia'];
            this.title = this.idResource ? 'Editar Abrangência' : 'Nova Abrangência';

            if ( !this.idResource ) {
                return;
            }
            this.abrangenciaService.getAbrangenciaId(this.idResource).subscribe(abrangencia => {
                abrangencia = this.abrangencia = abrangencia;

                    response => {
                        if ( response.status == 404 ) {
                            this.router.navigate(['abrangencia']);
                        }
                    }
            });

        });
    }

    save() {
        let result, userValue = this.formAbrangencia.value;
        let atualizar: boolean;

        if (this.idResource) {
            atualizar = true;
            this.loaderService.setMsgLoading('Atualizando abrangência ...');
            result = this.abrangenciaService.updateAbrangencia(this.idResource, userValue);
        } else {
            atualizar = false;
            this.loaderService.setMsgLoading('Salvando abrangência ...');
            result = this.abrangenciaService.addAbrangencia(userValue);
        }

        result.subscribe(data => {
            if (atualizar) {
                this.mensagensHandler.handleSuccess('Abrangência atualizada com sucesso!');
            } else {
                this.mensagensHandler.handleSuccess('Abrangência salva com sucesso!');
            }
            this.router.navigate(['abrangencia']);
        });
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/abrangencia']);
    }

    setNomeAbrangencia(id: any) {
        switch (id) {
            case '1':
                {
                    this.abrangencia.nome = 'Moderado';
                    break;
                }
            case '2':
                {
                    this.abrangencia.nome = 'Significativa';
                    break;
                }
            case '3': {
                this.abrangencia.nome = 'Muito';
                break;
            }
            default: {
                break;
            }
        }
    }
}
