import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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
        private complexidadeService: ComplexidadeService
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
        var hasErrors: boolean = false;
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
        var id_complexidade = this.route.params.subscribe(params => {
            this.idResource = params['id_complexidade'];
            this.title = this.idResource ? 'Editar Complexidade' : 'Nova Complexidade';

            if (!this.idResource)
                return;

            this.complexidadeService.getComplexidadeId(this.idResource).subscribe(complexidade => {
                complexidade = this.complexidade = complexidade
                console.log(complexidade.id_complexidade),
                    response => {
                        if (response.status == 404) {
                            this.router.navigate(['complexidade'])
                        }
                    }
            })

        })
    }

    save() {
        var result,
            userValue = this.formComplexidade.value;

        if (this.idResource) {
            //debugger
            result = this.complexidadeService.updateComplexidade(this.idResource, userValue);
        } else {
            result = this.complexidadeService.addComplexidade(userValue);
        }
        result.subscribe(data => this.router.navigate(['complexidade']));
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
