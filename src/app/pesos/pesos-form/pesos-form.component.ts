import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';
import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { LoaderService } from 'app/shared/services/loader.service';

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
    allPesos: any[]; 
    idResource: any;

    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private pesosService: PesosService,
        private loaderService: LoaderService,
		private mensagensHandler: MensagensHandler
    ) {
        this.formPesos = formBuilder.group({
            quantidade: [null, Validators.required],
            tipo: [null, Validators.required],
            descricao: [null, Validators.required],
            valor: [null, Validators.required]
        })

        console.log(this.formPesos);
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
        
        this.loaderService.setMsgLoading("Carregando ...");
		this.mensagensHandler.handleClearMessages();
		        
        var id_pesos = this.route.params.subscribe(params => {
            this.idResource = params['id_pesos'];
            this.title = this.idResource ? 'Editar Peso' : 'Novo Peso';

            this.pesosService.getPesos().subscribe(pesos => {
                this.allPesos = pesos;
            })

            this.pesosService.getPesosId(this.idResource).subscribe(pesos => {
                pesos = this.pesos = pesos;
                response => {
                    if (response.status == 404) {
                        this.router.navigate(['pesos'])
                    }
                }
            })
        })
    }

    save() {
        let result, userValue = this.formPesos.value;
        let atualizar: boolean;
        
        if (this.idResource) {
            atualizar = true;
            this.loaderService.setMsgLoading("Atualizando pesos ...");
            result = this.pesosService.updatePesos(this.idResource, userValue);
        } else {
            atualizar = false;
			this.loaderService.setMsgLoading("Salvando pesos ...");
            result = this.pesosService.addPesos(userValue);
        }
        
        result.subscribe(data => {
			if (atualizar) {
				this.mensagensHandler.handleSuccess("Peso atualizado com sucesso!");
			} else {
                this.mensagensHandler.handleSuccess("Peso salvo com sucesso!");
			}
			this.router.navigate(['pesos']);
		}
		);
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/pesos']);
    }

}