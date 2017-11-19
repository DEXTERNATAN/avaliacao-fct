import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import 'rxjs/Rx';

import { Avaliacao } from './../avaliacao.model';
import { Colaborador } from './../../colaborador/colaborador.model';
import { Divisao } from './../../divisao/divisao.model';
import { Papel } from './../../papel/papel.model';
import { Tecnologia } from './../../tecnologia/tecnologia.model';
import { AvaliacaoService } from './../avaliacao.service';
import { ColaboradorService } from './../../colaborador/colaborador.service';
import { DivisaoService } from './../../divisao/divisao.service';
import { PapelService } from './../../papel/papel.service';
import { TecnologiaService } from './../../tecnologia/tecnologia.service';

@Component({
    selector: 'mt-avaliacao-form',
    templateUrl: './avaliacao-form.component.html',
    styleUrls: ['./avaliacao-form.component.css']
})
export class AvaliacaoFormComponent implements OnInit {

    PapelAtributo: any[] = [];
    private doctors = [];

    formAvaliacao: FormGroup;
    title: string;
    avaliacao: Avaliacao = new Avaliacao();
    papel: Papel[] = [];
    idResource: any;
    placeholder: string = 'Placeholder...';
    value: string[];
    current: any[];
    Divisao: Divisao[] = [];
    Colaborador: Colaborador[] = [];
    Papel: Papel[] = [];
    Tecnologia: Tecnologia[] = [];

    public PapelAtributo2: any[] = [];
    public valorCopy: any[];

    /* Selectize */
    configPapel = {
        create: true,
        valueField: 'id_papel',
        labelField: 'nome',
        searchField: ['nome'],
        delimiter: ',',
        plugins: ['dropdown_direction', 'remove_button'],
        dropdownDirection: 'down',
        maxItems: 3,
        onChange: this.getChangeData.bind(this)
    };

    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private colaboradorService: ColaboradorService,
        private avaliacaoService: AvaliacaoService,
        private papelService: PapelService,
        private tecnologiaService: TecnologiaService,
        private divisaoService: DivisaoService
    ) {
        this.formAvaliacao = formBuilder.group({
            divisao: [0],
            papel: [0]
            // sigla: [null, Validators.required],
            // nome: [null, Validators.required],
            // papeisResultado: [null, Validators.required],
            // tecnologiaResultado: [null, Validators.required]
        })
    }

    hasErrors(): boolean {
        let hasErrors: boolean = false;
        for (let controlName in this.formAvaliacao.controls) {
            let control: AbstractControl = this.formAvaliacao.controls[controlName];
            if (!control.valid && !control.pristine) {
                hasErrors = true;
                break;
            }
        }
        return hasErrors;
    }

    ngOnInit() {

        let id_resultado = this.route.params.subscribe(params => {
            this.idResource = params['id_resultado'];
            this.title = this.idResource ? 'Editar Avaliação' : 'Nova Avaliação';

            if (!this.idResource) {
                return;
            }

            this.avaliacaoService.getAvaliacaoId(this.idResource).subscribe(response => {
                response = this.avaliacao = response;
                if (response.status === 404) {
                    this.router.navigate(['avaliacao'])
                }
            });
        });

        // Carga dos dados complementares
        this.getPapeis();
        this.getDivisao();
        this.getColaborador();
        this.getTecnologia();

        // se inscreve para verificar alterações no valor das faixas
        this.formAvaliacao.get('divisao').valueChanges.subscribe( /* <- does work */
            divisao => {
                let colabFilter: any[];
                this.colaboradorService.getColaborador().subscribe(colaborador => {
                    colabFilter = colaborador.filter(function (el) {
                        return el['sigla'] === divisao;
                    });
                    this.Colaborador = colabFilter;
                });
            }
        );

    }


    save() {
        let result, userValue = this.formAvaliacao.value;

        if (this.idResource) {
            result = this.avaliacaoService.updateAvaliacao(this.idResource, userValue);
        } else {
            result = this.avaliacaoService.addAvaliacao(userValue);
        }

        result.subscribe(data => this.router.navigate(['avaliacao']));
    }

    getPapeis() {
        this.papelService.getPapel().subscribe(papel => {
            this.papel = papel;
        });
    }

    getDivisao() {
        this.divisaoService.getDivisao().subscribe(divisao => {
            this.Divisao = divisao;
        });
    }

    getColaborador() {
        this.colaboradorService.getColaborador().subscribe(colaborador => {
            this.Colaborador = colaborador;
        });
    }

    getTecnologia() {
        this.tecnologiaService.getTecnologia().subscribe(tecnologia => {
            this.Tecnologia = tecnologia;
        });
    }

    getPapelAtributo(idPapel) {
        console.log(idPapel);
        // idPapel.forEach(element => {
        //     console.log('Elemento: ', element);
        //     this.avaliacaoService.getPapelAtributo(idPapel).subscribe(papelAtributo => {
        //         console.log('Papel: ', papelAtributo);
        //         this.PapelAtributo2.push(papelAtributo)
        //         // this.PapelAtributo = papelAtributo
        //     });
        // });
        // console.log(this.PapelAtributo2);
    }


    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/avaliacao']);
    }

    getChangeData(valor) {
        let vlrArray: Array<string>[] = [];
        valor.forEach(element => {
            this.avaliacaoService.getPapelAtributo(element).subscribe((data) => {
                if (data !== []) {
                    data.forEach(arrayPush => {
                        vlrArray.push(arrayPush);
                        this.PapelAtributo = vlrArray;
                    });
                }
            });
        });
        // console.log(this.PapelAtributo);
    }

}
