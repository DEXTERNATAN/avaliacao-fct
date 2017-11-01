import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { Distribuicao } from './../distribuicao.model';
import { DistribuicaoService } from './../distribuicao.service';
import { FuncoesGlobais } from 'app/shared/app.funcoes-globais';


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
                this.distribuicao.dt_registro = FuncoesGlobais.dataFormatadaView(this.distribuicao.dt_registro);
                    response => {
                        if (response.status == 404) {
                            //this.router.navigate(['distribuicao'])
                        }
                    }
            })
        })
    }

    save() {

        // Setando a nova data para salvar no banco
        //this.formDistribuicao.get('dt_registro').setValue(FuncoesGlobais.dataFormatadaCad(this.distribuicao.dt_registro));
        
        // Chamanda para edicao e cadastro no banco
        var result, userValue = this.formDistribuicao.value;
        if (this.idResource) {
            debugger
            result = this.distribuicaoService.updateDistribuicao(this.idResource, userValue);
        } else {
            result = this.distribuicaoService.addDistribuicao(userValue);
        }
        //result.subscribe(data => this.router.navigate(['distribuicao']));
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