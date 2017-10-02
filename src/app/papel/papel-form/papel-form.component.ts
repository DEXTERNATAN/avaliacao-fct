import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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
        private papelService: PapelService
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
        console.log('instanciacao: ', this.papeis)

        var id = this.route.params.subscribe(params => {
            this.idResource = params['id'];
            this.title = this.idResource ? 'Editar Papel' : 'Novo Papel';

            if (!this.idResource)
                return;

            this.papelService.getPapelId(this.idResource).subscribe(papel => {
                papel = this.papeis = papel

                console.log(papel.id),
                    response => {
                        if (response.status == 404) {
                            this.router.navigate(['papel'])
                        }
                    }
            })

        })
    }

    save() {
        var result,
            userValue = this.formPapel.value;


        if (this.idResource) {
            result = this.papelService.updatePapel(this.idResource, userValue);

        } else {
            result = this.papelService.addPapel(userValue);
        }

        result.subscribe(data => this.router.navigate(['papel']));

    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/papel']);
    }

}

