import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { Projeto } from './../projeto.model';
import { ProjetoService } from './../projeto.service';

@Component({
    selector: 'mt-projeto-form',
    templateUrl: './projeto-form.component.html',
    styleUrls: ['./projeto-form.component.css']
})
export class ProjetoFormComponent implements OnInit {

    formProjeto: FormGroup;
    title: string;
    projeto: Projeto = new Projeto();
    idResource: any;

    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private projetoService: ProjetoService
    ) {
        this.formProjeto = formBuilder.group({
            titulo: [null, Validators.required],
            codservico: [null, Validators.required],
            descricao: [null, Validators.required],
            dtinicio: [null, Validators.required],
            dtfim: [null, Validators.required],
            abrangencia: [null, Validators.required]
        })
    }

    hasErrors(): boolean {
        var hasErrors: boolean = false;
        for (var controlName in this.formProjeto.controls) {
            var control: AbstractControl = this.formProjeto.controls[controlName];
            if (!control.valid && !control.pristine) {
                hasErrors = true;
                break;
            }
        }
        return hasErrors;
    }

    ngOnInit() {
        var id = this.route.params.subscribe(params => {
            this.idResource = params['id'];
            this.title = this.idResource ? 'Editar Projeto' : 'Novo Projeto';

            if (!this.idResource)
                return;

            this.projetoService.getProjetoId(this.idResource).subscribe(projeto => {
                projeto = this.projeto = projeto
                console.log(projeto.id),
                    response => {
                        if (response.status == 404) {
                            this.router.navigate(['projeto'])
                        }
                    }
            })

        })
    }

    save() {
        var result,
            userValue = this.formProjeto.value;

        if (this.idResource) {
            result = this.projetoService.updateProjeto(this.idResource, userValue);
        } else {
            result = this.projetoService.addProjeto(userValue);
        }
        result.subscribe(data => this.router.navigate(['projeto']));
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/projeto']);
    }
}