import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { Projeto } from './../projeto.model';
import { ProjetoService } from './../projeto.service';
import { FuncoesGlobais } from 'app/shared/app.funcoes-globais';

@Component({
    selector: 'mt-projeto-form',
    templateUrl: './projeto-form.component.html',
    styleUrls: ['./projeto-form.component.css']
})
export class ProjetoFormComponent implements OnInit {
    errorData: boolean = true;
    pt: { firstDayOfWeek: number; dayNames: string[]; dayNamesShort: string[]; dayNamesMin: string[]; monthNames: string[]; monthNamesShort: string[]; today: string; clear: string; };

    formProjeto: FormGroup;
    projeto: Projeto = new Projeto();
    idResource: any;
    title: string;

    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private projetoService: ProjetoService
    ) {
        this.formProjeto = formBuilder.group({
            titulo: [null, Validators.required],
            cod_servico: [null, Validators.required],
            descricao: [null, Validators.required],
            dt_inicio: [null, Validators.required],
            dt_fim: [null, Validators.required],
            abrangencia: [null, Validators.required]
        })
    }

    hasErrors(): boolean {
        var hasErrors: boolean = false;
        for (var controlName in this.formProjeto.controls) {
            var control: AbstractControl = this.formProjeto.controls[controlName];
            if (!control.valid && !control.pristine) {
                hasErrors = true;
                break;
            }
        }
        return hasErrors;
    }

    ngOnInit() {

        this.pt = {
            firstDayOfWeek: 0,
            dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
            dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
            dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
            monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            today: 'Hoje',
            clear: 'Limpar'
        };

        var id_projeto = this.route.params.subscribe(params => {
            this.idResource = params['id_projeto'];
            this.title = this.idResource ? 'Editar Projeto' : 'Novo Projeto';

            if (!this.idResource)
                return;

            this.projetoService.getProjetoId(this.idResource).subscribe(projeto => {
                projeto = this.projeto = projeto
                // debugger
                this.projeto.dt_inicio = FuncoesGlobais.dataFormatadaView(this.projeto.dt_inicio);
                this.projeto.dt_fim = FuncoesGlobais.dataFormatadaView(this.projeto.dt_fim);

                response => {
                    if (response.status == 404) {
                        this.router.navigate(['projeto'])
                    }
                }
            })

        })
    }

    save() {

        console.log(this.formProjeto.get('dt_inicio').value > this.formProjeto.get('dt_fim').value);
        if (this.formProjeto.get('dt_inicio').value > this.formProjeto.get('dt_fim').value) {
            console.log('A data inicial não pode ser maior que a final!');
            this.errorData = false;
        } else {

            // Setando a nova data para salvar no banco
            this.formProjeto.get('dt_inicio').setValue(FuncoesGlobais.dataFormatadaCad(this.formProjeto.value.dt_inicio));
            this.formProjeto.get('dt_fim').setValue(FuncoesGlobais.dataFormatadaCad(this.formProjeto.value.dt_fim));

            var result, projetoValue = this.formProjeto.value;

            if (this.idResource) {
                result = this.projetoService.updateProjeto(this.idResource, projetoValue);
            } else {
                result = this.projetoService.addProjeto(projetoValue);
            }
            result.subscribe(data => this.router.navigate(['projeto']));
        }
    }

    onCancel() {
        this.navigateBack();
    }

    formataData(data, formatoMysql: boolean) {
        if (formatoMysql) {
            let dtFormat = new Date(data);
            console.log(dtFormat.toLocaleDateString());
            return dtFormat.toLocaleDateString();
        } else {
            return data;
        }
    }

    private navigateBack() {
        this.router.navigate(['/projeto']);
    }
}