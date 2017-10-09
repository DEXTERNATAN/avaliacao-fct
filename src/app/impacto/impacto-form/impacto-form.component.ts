import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

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
        private impactoService: ImpactoService
    ) {
        this.formImpacto = formBuilder.group({
            atributo: [null, Validators.required],
            classificacao: [null, Validators.required],
            tipo: [null, Validators.required],
            nome: [null, Validators.required],
            descricao: [null, Validators.required]
        })
    }

    hasErrors(): boolean {
        var hasErrors: boolean = false;
        for (var controlName in this.formImpacto.controls) {
            var control: AbstractControl = this.formImpacto.controls[controlName];
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
            this.title = this.idResource ? 'Editar o Impacto' : 'Novo Impacto';

            if (!this.idResource)
                return;

            this.impactoService.getImpactoId(this.idResource).subscribe(impacto => {
                impacto = this.impacto = impacto
                console.log(impacto.id),
                    response => {
                        if (response.status == 404) {
                            this.router.navigate(['impacto'])
                        }
                    }
            })
        })
    }

    save() {
        var result,
            userValue = this.formImpacto.value;

        if (this.idResource) {
            result = this.impactoService.updateImpacto(this.idResource, userValue);
        } else {
            result = this.impactoService.addImpacto(userValue);
        }
        result.subscribe(data => this.router.navigate(['impacto']));
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
                    this.impacto.nome = 'Moderado';
                    break;
                }
            case '2':
                {
                    this.impacto.nome = 'Significativa';
                    break;
                }
            case '3': {
                this.impacto.nome = 'Muito';
                break;
            }
            default: {
                break;
            }
        }
    }
}
