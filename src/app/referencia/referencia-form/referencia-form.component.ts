import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { Referencia } from './../referencia.model';
import { ReferenciaService } from './../referencia.service';

@Component({
    selector: 'mt-referencia-form',
    templateUrl: './referencia-form.component.html',
    styleUrls: ['./referencia-form.component.css']
})
export class ReferenciaFormComponent implements OnInit {

    formReferencia: FormGroup;
    title: string;
    referencia: Referencia = new Referencia();
    idResource: any;
    
    public maskData = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
    public maskValor = [/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/];


    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private referenciaService: ReferenciaService
    ) {
        this.formReferencia = formBuilder.group({
            cargo: [null, Validators.required],
            num_referencia: [null, Validators.required],
            valor_referencia: [null, Validators.required],
            dt_atualizacao: [null, Validators.required]
        })
    }

    hasErrors(): boolean {
        var hasErrors: boolean = false;
        for (var controlName in this.formReferencia.controls) {
            var control: AbstractControl = this.formReferencia.controls[controlName];
            if (!control.valid && !control.pristine) {
                hasErrors = true;
                break;
            }
        }
        return hasErrors;
    }

    ngOnInit() {
        var id_referencia = this.route.params.subscribe(params => {
            this.idResource = params['id_referencia'];
            this.title = this.idResource ? 'Editar Referência FCT' : 'Nova Referência FCT';

            if (!this.idResource)
                return;

            this.referenciaService.getReferenciaId(this.idResource).subscribe(referencia => {
                referencia = this.referencia = referencia
                console.log(referencia.id_referencia),
                    response => {
                        if (response.status == 404) {
                            this.router.navigate(['referencia'])
                        }
                    }
            })

        })
    }

    save() {
        var result,
            userValue = this.formReferencia.value;

        if (this.idResource) {
            result = this.referenciaService.updateReferencia(this.idResource, userValue);
        } else {
            result = this.referenciaService.addReferencia(userValue);
        }
        result.subscribe(data => this.router.navigate(['referencia']));
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/referencia']);
    }
}