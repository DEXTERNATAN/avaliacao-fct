import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

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
import { FilterPipe } from './../../shared/pipes/filter';

@Component({
    selector: 'mt-avaliacao-form',
    templateUrl: './avaliacao-form.component.html',
    styleUrls: ['./avaliacao-form.component.css']
})
export class AvaliacaoFormComponent implements OnInit {

    formAvaliacao: FormGroup;
    title: string;
    avaliacao: Avaliacao = new Avaliacao();
    papel: Papel[] = [];
    idResource: any;
    placeholder: string = 'Placeholder...';
    value: string[];
    current: string;
    Divisao: Divisao[] = [];
    Colaborador: Colaborador[] = [];
    Papel: Papel[] = [];
    Tecnologia: Tecnologia[] = [];

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
            divisao: [0]
            // sigla: [null, Validators.required],
            // nome: [null, Validators.required],
            // papeisResultado: [null, Validators.required],
            // tecnologiaResultado: [null, Validators.required]
        })
    }

    hasErrors(): boolean {
        var hasErrors: boolean = false;
        for (var controlName in this.formAvaliacao.controls) {
            var control: AbstractControl = this.formAvaliacao.controls[controlName];
            if (!control.valid && !control.pristine) {
                hasErrors = true;
                break;
            }
        }
        return hasErrors;
    }

    ngOnInit() {

        var id_resultado = this.route.params.subscribe(params => {
            this.idResource = params['id_resultado'];
            this.title = this.idResource ? 'Editar Avaliação' : 'Nova Avaliação';

            if (!this.idResource)
                return;

            this.avaliacaoService.getAvaliacaoId(this.idResource).subscribe(avaliacao => {
                avaliacao = this.avaliacao = avaliacao

                response => {
                    if (response.status == 404) {
                        this.router.navigate(['avaliacao'])
                    }
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
                console.log('title has changed:', divisao);
                this.getColaborador();                
                this.searchColaborador(divisao, this.Colaborador);
            }
        );

    }

    changed(data: { value: string[] }) {
        this.current = data.value.join(' | ');
    }

    save() {
        var result, userValue = this.formAvaliacao.value;

        if (this.idResource) {
            result = this.avaliacaoService.updateAvaliacao(this.idResource, userValue);
        } else {
            result = this.avaliacaoService.addAvaliacao(userValue);
        }

        result.subscribe(data => this.router.navigate(['avaliacao']));
    }

    getPapeis() {
        this.papelService.getPapel().subscribe(papel => {
            this.papel = papel
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

    searchColaborador(divisao, colaborador){
        colaborador.forEach(element => {
            if(divisao == element.sigla){
                this.Colaborador = [];
                this.Colaborador.push(element);
                console.log('É igual: ', this.Colaborador);
                //this.Colaborador.push(element);
                //this.formAvaliacao.get('divisao').setValue(element);
            }
        });
    }
    // searchPapeis(event) {
    //     this.papelService.getPapel().subscribe(papel => {
    //         let papeis: string[] = [];
    //         papel.forEach(element => {
    //             papeis.push(element.nome);
    //         });
    //         this.papeisResultado = papeis;
    //     });
    // }

    // searchTecnologia(event) {
    //     this.tecnologiaService.getTecnologia().subscribe(tecnologia => {
    //         let tecnologias: string[] = [];
    //         tecnologia.forEach(element => {
    //             tecnologias.push(element.tipo + " - " + element.nome);
    //         });
    //         this.tecnologiaResultado = tecnologias;
    //     });
    // }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/avaliacao']);
    }

    /* Selectize */
    configPapel = {
        labelField: 'nome',
        valueField: 'id_papel',
        highlight: false,
        create: false,
        persist: true,
        searchField: ['nome'],
        plugins: ['dropdown_direction', 'remove_button'],
        dropdownDirection: 'down',
        maxItems: 3
    };

    configDivisao = {
        labelField: 'sigla',
        valueField: 'id_divisao',
        highlight: false,
        create: false,
        persist: true,
        searchField: ['sigla'],
        dropdownDirection: 'down'
    };

    configColaborador = {
        labelField: 'nome',
        valueField: 'id_colaborador',
        highlight: false,
        create: false,
        persist: true,
        searchField: ['sigla'],
        dropdownDirection: 'down'
    };

    onValueChange($event) {
        console.log("Option changed: ", $event);
    }


}