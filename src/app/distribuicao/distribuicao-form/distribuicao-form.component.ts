import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';
import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { LoaderService } from 'app/shared/services/loader.service';

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
        private distribuicaoService: DistribuicaoService,
        private loaderService: LoaderService,
		private mensagensHandler: MensagensHandler
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

        this.loaderService.setMsgLoading("Carregando ...");
		this.mensagensHandler.handleClearMessages();
		        
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
                            this.router.navigate(['distribuicao'])
                        }
                    }
            })
        })
        this.calcularDiferencaPontuacao();
        this.calcularAmplitude();
    }

    save() {

        // Setando a nova data para salvar no banco
        this.formDistribuicao.get('dt_registro').setValue(null);
        
        // Chamanda para edicao e cadastro no banco
        let result, userValue = this.formDistribuicao.value;
        let atualizar: boolean;

        if (this.idResource) {
            atualizar = true;
            this.loaderService.setMsgLoading("Atualizando a distribuição ...");
            result = this.distribuicaoService.updateDistribuicao(this.idResource, userValue);
        } else {
            atualizar = false;
			this.loaderService.setMsgLoading("Salvando a distribuição ...");
            result = this.distribuicaoService.addDistribuicao(userValue);
        }
        result.subscribe(data => {
			if (atualizar) {
				this.mensagensHandler.handleSuccess("Distribuição atualizada com sucesso!");			} else {
                this.mensagensHandler.handleSuccess("Distribuição salva com sucesso!");
			}
			this.router.navigate(['distribuicao']);
		}
		);
    }

    calcularDiferencaPontuacao(): void {
        //debugger
        let minima: number = this.formDistribuicao.get('pontuacao_minima').value;
        let maxima: number = this.formDistribuicao.get('pontuacao_maxima').value;
        let calculoDiferenca: any = (maxima - minima);

        this.formDistribuicao.get('diferenca').setValue(calculoDiferenca);

    }

    calcularAmplitude(): void {
        
        let diferenca: number = this.formDistribuicao.get('diferenca').value;
        let qtdefaixas: number = this.formDistribuicao.get('qtde_faixas').value;
        let Amplitude: number = (diferenca/qtdefaixas);
        
        this.formDistribuicao.get('amplitude_faixas').setValue(Amplitude);
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