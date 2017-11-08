import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoaderService } from 'app/shared/services/loader.service';

import { Divisao } from './divisao';
import { DivisaoService } from './../divisao.service';

@Component({
    selector: 'app-divisao-form',
    templateUrl: './divisao-form.component.html',
    styleUrls: ['./divisao-form.component.css']
})
export class DivisaoFormComponent implements OnInit {
    formDivisao: FormGroup;
    title: string;
    divisaos: Divisao = new Divisao();
    idResource: any;

    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private divisaoService: DivisaoService,
        private loaderService: LoaderService,
		private mensagensHandler: MensagensHandler
    ) {
        this.formDivisao = formBuilder.group({

            sigla: [null, [Validators.required, Validators.maxLength(5)]],
            nome: [null, Validators.required],
            descricao: [null, Validators.required],
            uf: [null, Validators.required],
            especialidade: [null, Validators.required]
        })
    }

    hasErrors(): boolean {
        var hasErrors: boolean = false;
        for (var controlName in this.formDivisao.controls) {
            var control: AbstractControl = this.formDivisao.controls[controlName];
            if (!control.valid && !control.pristine) {
                hasErrors = true;
                break;
            }
        }
        return hasErrors;
    }

    ngOnInit() {
        
        this.loaderService.setMsgLoading("Carregando ...");
		this.mensagensHandler.handleClearMessages();

        var id_divisao = this.route.params.subscribe(params => {
            
            this.idResource = params['id_divisao'];
            this.title = this.idResource ? 'Editar Divisão' : 'Nova Divisão';

            if (!this.idResource)
                return;

            this.divisaoService.getDivisaoId(this.idResource).subscribe(divisao => {
                divisao = this.divisaos = divisao
                console.log(divisao.id_divisao),
                    response => {
                        if (response.status == 404) {
                            this.router.navigate(['divisao'])
                        }
                    }
            })

        })
    }

    save() {
        
        let result, userValue = this.formDivisao.value;
        let atualizar: boolean;

        if (this.idResource) {
            atualizar = true;
            this.loaderService.setMsgLoading("Atualizando divisão ...");
            result = this.divisaoService.updateDivisao(this.idResource, userValue);
        } else {
            atualizar = false;
			this.loaderService.setMsgLoading("Salvando divisão ...");
            result = this.divisaoService.addDivisao(userValue);
        }

        result.subscribe(data => {
			if (atualizar) {
				this.mensagensHandler.handleSuccess("Divisão atualizada com sucesso!");
			} else {
				this.mensagensHandler.handleSuccess("Divisão salva com sucesso!");
			}
			this.router.navigate(['divisao']);
		}
		);
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/divisao']);
    }
}