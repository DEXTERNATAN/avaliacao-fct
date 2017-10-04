import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Colaborador } from './../colaborador.model';
import { ColaboradorService } from './../colaborador.service';

@Component({
    selector: 'app-colaborador-form',
    templateUrl: './colaborador-form.component.html',
    styleUrls: ['./colaborador-form.component.css']
})
export class ColaboradorFormComponent implements OnInit {
    formColaborador: FormGroup;
    title: string;
    colaborador: Colaborador = new Colaborador();
    idResource: any;

    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private colaboradorService: ColaboradorService
    ) {
        this.formColaborador = formBuilder.group({

            nome: [null, [Validators.required]],
            matricula: [null, Validators.required],
            telefone: [null, Validators.required],
            especialidade: [null, Validators.required],
            salario: [null, Validators.required],
            percentualSalario: [null, Validators.required],
            referenciaFctFk: [null, Validators.required],
            divisaoFk: [null, Validators.required]
        })
    }

    hasErrors(): boolean {
        var hasErrors: boolean = false;
        for (var controlName in this.formColaborador.controls) {
            var control: AbstractControl = this.formColaborador.controls[controlName];
            if (!control.valid && !control.pristine) {
                hasErrors = true;
                break;
            }
        }
        return hasErrors;
    }

    ngOnInit() {
        console.log('instanciacao: ', this.colaborador)

        var id = this.route.params.subscribe(params => {
            this.idResource = params['id'];
            this.title = this.idResource ? 'Editar Colaborador' : 'Novo Colaborador';

            if (!this.idResource)
                return;

            this.colaboradorService.getColaboradorId(this.idResource).subscribe(colaborador => {
                colaborador = this.colaborador = colaborador
                console.log(colaborador.id),
                    response => {
                        if (response.status == 404) {
                            this.router.navigate(['colaborador'])
                        }
                    }
            })

        })
    }

    save() {
        var result,
            userValue = this.formColaborador.value;

        if (this.idResource) {
            //debugger
            result = this.colaboradorService.updateColaborador(this.idResource, userValue);
        } else {
            result = this.colaboradorService.addColaborador(userValue);
        }

        result.subscribe(data => this.router.navigate(['colaborador']));
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/colaborador']);
    }

    setCamposFk(id: string) {
        this.colaborador.referenciaFctFk = '1';
        this.colaborador.divisaoFk = '1';

    }

}