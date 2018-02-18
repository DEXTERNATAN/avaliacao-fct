import { DataTableDirective } from 'angular-datatables';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';

import { Avaliacao } from './avaliacao.model';

import { LoginService } from 'app/security/login/login.service';
import { AvaliacaoService } from 'app/avaliacao/avaliacao.service';
import { ColaboradorService } from 'app/colaborador/colaborador.service';

import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'mt-avaliacao',
    templateUrl: './avaliacao.component.html',
    styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent implements OnInit, AfterViewInit {

    public Avaliacao: Avaliacao[] = [];
    public avaliacaoDetalhe: any[] = [];
    public avaliacaoCarregada = true;

    dtOptions: DataTables.Settings = {};
    @ViewChild(DataTableDirective)
    dtElement: DataTableDirective;

    // We use this trigger because fetching the list of persons can be quite long,
    // thus we ensure the data is fetched before rendering
    dtTrigger: Subject<Avaliacao> = new Subject();
    lang = 'Portuguese-Brasil';

    constructor(
        private _avaliacaoService: AvaliacaoService,
        private _colaboradorService: ColaboradorService,
        private loginService: LoginService,
        private mensagensHandler: MensagensHandler,
        private toastr: ToastrService
    ) { }

    ngOnInit() {

        this.dtOptions = {
            language: {
                url: `assets/language/datatables/${this.lang}.json`
            }
        };

        this._avaliacaoService.getAvaliacao()
            .subscribe(avaliacao => {
                this.Avaliacao = avaliacao;
                this.avaliacaoCarregada = false;
                this.dtTrigger.next();
                this.getAvaliacaoDetalhe(avaliacao);
            });
        }

    ngAfterViewInit(): void { }

    deleteAvaliacao(avaliacao, avaliacaoDetalhe) {

    if (confirm('Tem certeza que quer APAGAR a Avaliação #' + avaliacao.id_resultado + ' ?')) {

        let index = avaliacaoDetalhe.indexOf(avaliacao);
        avaliacaoDetalhe.splice(index, 1);

        this._avaliacaoService.deleteAvaliacao(avaliacao.id_resultado).subscribe(
            data => {
                // this.mensagensHandler.handleSuccess('Avaliação removida com sucesso!');
                // this.showSuccess()
                this.toastr.success('Avaliação removida com sucesso!', 'Sucesso!', {
                    progressBar: true,
                    progressAnimation: 'increasing',
                    closeButton: true,
                    timeOut: 3000
                });
                setTimeout(() => {
                    this.mensagensHandler.handleClearMessages();
                }, 3000);
            },
            err => {
                alert('A avaliação não foi apagada!');
                avaliacaoDetalhe.splice(index, 0, avaliacao);
                throw err;
            });
        }
    }

    getAvaliacaoDetalhe(data) {

        data.forEach(elementGroup => {
            this._avaliacaoService.getAvaliacaoId(elementGroup.TB_COLABORADOR_id_colaborador).subscribe(elementDetalhe => {
                this.avaliacaoDetalhe.push({
                    'listGroup': elementGroup,
                    'listDetalhe': elementDetalhe
                });
            });
        });
    }

}
