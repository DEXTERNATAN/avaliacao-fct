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
            dt_registro: [null, Validators.required]
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
        console.log(hasErrors);
        return hasErrors;
    }

    ngOnInit() {
        var id_pesos = this.route.params.subscribe(params => {
            this.idResource = params['id_pesos'];
            this.title = this.idResource ? 'Editar Peso' : 'Novo Peso';

            if (!this.idResource){
                this.pesos.dt_registro = this.geraData(null, 'new');
                return;
            }
                

            this.pesosService.getPesosId(this.idResource).subscribe(pesos => {
                pesos = this.pesos = pesos;
                this.pesos.dt_registro = this.geraData(this.pesos.dt_registro, 'edit');
                console.log(this.pesos.dt_registro);
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

    geraData(data, opcao) {
       
        if (data && opcao == 'edit') {
            let newValue = new Date(this.pesos.dt_registro.toString()).toLocaleDateString();
            console.log(newValue, this.pesos.dt_registro);
            return newValue;
        }
        if (!data && opcao == 'new') {
            let DtAtual = new Date().toLocaleDateString();
            console.log(DtAtual);
            return DtAtual;
        }

    }

}