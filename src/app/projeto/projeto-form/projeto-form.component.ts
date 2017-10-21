import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { TextMaskModule } from 'angular2-text-mask';

import { Projeto } from './../projeto.model';
import { ProjetoService } from './../projeto.service';

@Component({
    selector: 'mt-projeto-form',
    templateUrl: './projeto-form.component.html',
    styleUrls: ['./projeto-form.component.css']
})
export class ProjetoFormComponent implements OnInit {

    formProjeto: FormGroup;
    projeto: Projeto = new Projeto();
    idResource: any;
    title: string;
    public maskDate = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];


    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private projetoService: ProjetoService
    ) {
        this.formProjeto = formBuilder.group({
            titulo: [null, Validators.required],
            cod_servico: [null, Validators.required],
            descricao: [null, Validators.required],
            dt_inicio: [null, Validators.required],
            dt_fim: [null, Validators.required],
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
        var id_projeto = this.route.params.subscribe(params => {
            this.idResource = params['id_projeto'];
            this.title = this.idResource ? 'Editar Projeto' : 'Novo Projeto';

            if (!this.idResource)
                return;

            this.projetoService.getProjetoId(this.idResource).subscribe(projeto => {
                projeto = this.projeto = projeto

                this.projeto.dt_inicio = this.formataData(this.projeto.dt_inicio, true);
                this.projeto.dt_fim = this.formataData(this.projeto.dt_fim, true);

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

    formataData(data, formatoMysql: boolean){
        if(formatoMysql){
            let dtFormat = new Date(data);
            console.log(dtFormat.toLocaleDateString());
            return dtFormat.toLocaleDateString();
        }else{
            return data;
        }
    }

    private navigateBack() {
        this.router.navigate(['/projeto']);
    }
}