import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { Pesos } from './../pesos.model';
import { PesosService } from './../pesos.service';

@Component({
    selector: 'mt-pesos-form',
    templateUrl: './pesos-form.component.html',
    styleUrls: ['./pesos-form.component.css']
})
export class PesosFormComponent implements OnInit {

    formPesos: FormGroup;
    title: string;
    pesos: Pesos = new Pesos();
    idResource: any;

    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private pesosService: PesosService
    ) {
        this.formPesos = formBuilder.group({
            quantidade: [null, Validators.required],
            tipo: [null, Validators.required],
            descricao: [null, Validators.required],
            valor: [null, Validators.required],
            dtregistro: [null, Validators.required]
        })
    }

    hasErrors(): boolean {
        var hasErrors: boolean = false;
        for (var controlName in this.formPesos.controls) {
            var control: AbstractControl = this.formPesos.controls[controlName];
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
            this.title = this.idResource ? 'Editar Peso' : 'Novo Peso';

            if (!this.idResource)
                return;

            this.pesosService.getPesosId(this.idResource).subscribe(pesos => {
                pesos = this.pesos = pesos
                console.log(pesos.id),
                    response => {
                        if (response.status == 404) {
                            this.router.navigate(['pesos'])
                        }
                    }
            })
        })
    }

    save() {
        var result,
            userValue = this.formPesos.value;

        if (this.idResource) {
            result = this.pesosService.updatePesos(this.idResource, userValue);
        } else {
            result = this.pesosService.addPesos(userValue);
        }
        result.subscribe(data => this.router.navigate(['pesos']));
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/pesos']);
    }
}