import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { Distribuicao } from './../distribuicao.model';
import { DistribuicaoService } from './../distribuicao.service';

@Component({
    selector: 'mt-distribuicao-form',
    templateUrl: './distribuicao-form.component.html',
    styleUrls: ['./distribuicao-form.component.css']
})
export class DistribuicaoFormComponent implements OnInit {
    formDistribuicao: FormGroup;
    title: string;
    distribuicao: Distribuicao = new Distribuicao();
    idResource: any;
    public maskDate = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private distribuicaoService: DistribuicaoService
    ) {
        this.formDistribuicao = formBuilder.group({
            valor: [null, Validators.required],
            pontuacao_minima: [null],
            pontuacao_maxima: [null],
            diferenca: [null],
            amplitude_faixas: [null],
            qtde_faixas: [null, Validators.required],
            dt_registro: [null]
        })
    }

    ngOnInit() {
        var id_distribuicao = this.route.params.subscribe(params => {
            this.idResource = params['id_distribuicao'];
            this.title = this.idResource ? 'Editar Distribuição' : 'Nova Distribuição';

            if (!this.idResource)
                return;

            this.distribuicaoService.getDistribuicaoId(this.idResource).subscribe(distribuicao => {
                distribuicao = this.distribuicao = distribuicao
                console.log(distribuicao.id_distribuicao),
                    response => {
                        if (response.status == 404) {
                            this.router.navigate(['distribuicao'])
                        }
                    }
            })
        })
    }

    save() {
        var result,
            userValue = this.formDistribuicao.value;

        if (this.idResource) {
            result = this.distribuicaoService.updateDistribuicao(this.idResource, userValue);
        } else {
            result = this.distribuicaoService.addDistribuicao(userValue);
        }
        result.subscribe(data => this.router.navigate(['distribuicao']));
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/distribuicao']);
    }

    hasErrors(): boolean {
        var hasErrors: boolean = false;
        for (var controlName in this.formDistribuicao.controls) {
            var control: AbstractControl = this.formDistribuicao.controls[controlName];
            if (!control.valid && !control.pristine) {
                hasErrors = true;
                break;
            }
        }
        return hasErrors;
    }
}