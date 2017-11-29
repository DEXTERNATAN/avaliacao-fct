import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import 'rxjs/Rx';

import { Avaliacao } from './../avaliacao.model';
import { Colaborador } from './../../colaborador/colaborador.model';
import { Divisao } from './../../divisao/divisao.model';
import { Papel } from './../../papel/papel.model';
import { Tecnologia } from './../../tecnologia/tecnologia.model';
import { Projeto } from './../../projeto/projeto.model';

import { AvaliacaoService } from './../avaliacao.service';
import { ColaboradorService } from './../../colaborador/colaborador.service';
import { DivisaoService } from './../../divisao/divisao.service';
import { PapelService } from './../../papel/papel.service';
import { TecnologiaService } from './../../tecnologia/tecnologia.service';
import { ProjetoService } from './../../projeto/projeto.service';

@Component({
    selector: 'mt-avaliacao-form',
    templateUrl: './avaliacao-form.component.html',
    styleUrls: ['./avaliacao-form.component.css']
})

export class AvaliacaoFormComponent implements OnInit {

    formAvaliacao: FormGroup;
    avaliacao: Avaliacao = new Avaliacao();
    Divisao: Divisao[] = [];
    Colaborador: Colaborador[] = [];
    Papel: Papel[] = [];
    Projeto: Projeto[];
    Tecnologia: Tecnologia[] = [];
    papel: Papel[] = [];
    PapelAtributo2: any[] = [];
    valorCopy: any[];
    PapelAtributo: any[] = [];
    projetosList: number[] = [1];
    value: string[];
    valueTec: string[];
    current: any[];
    title: string;
    idResource: any;
    vlrTecnologia: number = 0;
    vlrTotal: number = 0;
    valorAtributo: number = 0;
    valorProjetos: number= 0;

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
        onItemRemove: this.getResetarAtributo.bind(this),
        onChange: this.getChangeData.bind(this)

    };

    configTecnologia = {
        create: true,
        valueField: 'id_tecnologia',
        labelField: 'nome',
        searchField: ['nome'],
        delimiter: ',',
        plugins: ['dropdown_direction', 'remove_button'],
        dropdownDirection: 'down',
        maxItems: 7,
        onItemAdd: this.getSomarTecnologia.bind(this, this),
        onItemRemove: this.getApagarTecnologia.bind(this)
    };

    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private colaboradorService: ColaboradorService,
        private avaliacaoService: AvaliacaoService,
        private papelService: PapelService,
        private tecnologiaService: TecnologiaService,
        private divisaoService: DivisaoService,
        private projetoService: ProjetoService
    ) {
        this.formAvaliacao = formBuilder.group({
            divisao: [0],
            colaborador: [0],
            papel: [0],
            abrangenciaa: [0],
            abrangenciab: [0],
            abrangenciac: [0],
            abrangenciad: [0],
            abrangenciae: [0],
            abrangenciaf: [0],
            abrangenciag: [0],
            abrangenciah: [0],
            abrangenciai: [0],
            abrangenciaj: [0],
            abrangenciak: [0],
            abrangencial: [0],
            abrangenciam: [0],
            abrangencian: [0],
            complexidadea: [0],
            complexidadeb: [0],
            complexidadec: [0],
            complexidaded: [0],
            complexidadee: [0],
            complexidadeg: [0],
            complexidadeh: [0],
            complexidadei: [0],
            complexidadej: [0],
            complexidadek: [0],
            complexidadel: [0],
            complexidadem: [0],
            complexidaden: [0],
            complexidadef: [0],
            impactoa: [0],
            impactob: [0],
            impactoc: [0],
            impactod: [0],
            impactoe: [0],
            impactof: [0],
            impactog: [0],
            impactoh: [0],
            impactoi: [0],
            impactoj: [0],
            impactok: [0],
            impactol: [0],
            impactom: [0],
            impacton: [0],
            tecnologia: [null],
            qtdProjetos: [1],
            abrangenciaProj0: [0],
            abrangenciaProj1: [0],
            abrangenciaProj2: [0],
            abrangenciaProj3: [0],
            abrangenciaProj4: [0],
            abrangenciaProj5: [0],
            complexidadeProj0: [0],
            complexidadeProj1: [0],
            complexidadeProj2: [0],
            complexidadeProj3: [0],
            complexidadeProj4: [0],
            complexidadeProj5: [0],
            impactoProj0: [0],
            impactoProj1: [0],
            impactoProj2: [0],
            impactoProj3: [0],
            impactoProj4: [0],
            impactoProj5: [0]
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

        this.route.params.subscribe(params => {
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
        this.getProjeto();

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

    getProjeto() {
        this.projetoService.getProjeto().subscribe(data => {
            this.Projeto = data;
            this.Projeto.sort(function (a, b) {
                if (a.cod_servico < b.cod_servico) {
                    return -1;
                } else if (a.cod_servico > b.cod_servico) {
                    return 1;
                } else {
                    return 0;
                }
            })
        });
    }

    addProjeto(value: number) {
        console.log(value);
        let tamanho = value;
        let i = 0;
        this.projetosList = [];
        let vlrSoma: number = 0;
        let vlrAbrangecia: number = 0;
        let vlrComplexidade: number = 0;
        let vlrImpacto: number = 0;

        for (i; i < tamanho; i++) {
            this.projetosList.push(value);
            vlrAbrangecia = parseFloat(this.formAvaliacao.get('abrangenciaProj' + i).value);
            vlrComplexidade = parseFloat(this.formAvaliacao.get('complexidadeProj' + i).value);
            vlrImpacto = parseFloat(this.formAvaliacao.get('impactoProj' + i).value);
            vlrSoma = vlrAbrangecia + vlrComplexidade + vlrImpacto;

            console.log(vlrSoma, vlrAbrangecia, vlrComplexidade, vlrImpacto);
        }
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/avaliacao']);
    }

    getChangeData(idAtributo) {
        let vlrArray: Array<string>[] = [];
        this.valorAtributo = 0;
        console.log(idAtributo);
        idAtributo.forEach(element => {
            this.avaliacaoService.getPapelAtributo(element).subscribe((data) => {
                if (data !== []) {
                    data.forEach(arrayPush => {
                        vlrArray.push(arrayPush);
                        this.PapelAtributo = vlrArray;

                        this.PapelAtributo.sort(function (a, b) {
                            if (a.letra < b.letra) {
                                return -1;
                            } else if (a.letra > b.letra) {
                                return 1;
                            } else {
                                return 0;
                            }
                        });

                        // Somando os atributos
                        this.valorAtributo = this.valorAtributo + parseFloat(this.formAvaliacao.get('abrangencia' + arrayPush.letra).value);
                        this.valorAtributo = this.valorAtributo + parseFloat(this.formAvaliacao.get('complexidade' + arrayPush.letra).value);
                        this.valorAtributo = this.valorAtributo + parseFloat(this.formAvaliacao.get('impacto' + arrayPush.letra).value);
                        console.log("LETRA >>> ", arrayPush.letra, "SOMA >>> ", this.valorAtributo);

                    });
                }
            });
        });
    }

    getResetarAtributo(valor) {
        this.PapelAtributo = [];
    }

    getSomarTecnologia(valor, item) {
        this.vlrTecnologia = this.vlrTecnologia + 1;
    }

    getApagarTecnologia(valor) {
        this.vlrTecnologia = this.vlrTecnologia - 1;
    }

    private somaValores() {

        let QtdPapeis = 0;
        QtdPapeis = this.papel.length; //Buscar na Tabela de Pesos o %



        //this.vlrTotal = (this.vlrTotal * QtdPapeis); 


        //Valor das Tecnologias
        //Buscar o valor na tabela de pesos para Quantidade de tecnologias
        let QtdTecnologias = 0;
        QtdTecnologias = this.vlrTecnologia; //Buscar na tabela de pesos o %

        //this.vlrTotal = (this.vlrTotal * QtdTecnologias);
        //console.log("Valor Total tecnologias = ", this.vlrTotal);

        // //Valor dos Atributos
        this.vlrTotal = this.vlrTotal + this.valorAtributo;
        console.log(this.vlrTotal, this.formAvaliacao.get('papel').value);
        this.getChangeData(this.formAvaliacao.get('papel').value);
        // let i = 0;
        // let j = 0;
        // let valorAtributo = 0;
        // let letra = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
        // let tamanhoLetra = letra.length;
        // let tamanho = this.PapelAtributo.length;

        // for (i; i < tamanho; i++) {
        //     for (j; j < tamanhoLetra; j++) {
        //         // debugger
        //         if (this.PapelAtributo[i].letra == letra[j]) {
        //             console.log("Letra no IF >>> ", letra[j]);
        //             console.log("Abrangencia >>> ", this.formAvaliacao.get('abrangencia' + letra[j]).value);
        //             console.log("Complexidade >>> ", this.formAvaliacao.get('complexidade' + letra[j]).value);
        //             console.log("Impacto >>> ", this.formAvaliacao.get('impacto' + letra[j]).value);

        // valorAtributo = parseFloat(this.formAvaliacao.get('abrangencia' + letra[j]).value);
        // valorAtributo = valorAtributo + parseFloat(this.formAvaliacao.get('complexidade' + letra[j]).value);
        // valorAtributo = valorAtributo + parseFloat(this.formAvaliacao.get('impacto' + letra[j]).value);
        // this.vlrTotal = this.vlrTotal + valorAtributo;
        //         }
        //     }
        // }

        console.log("VALOR TOTAL >>> ", this.vlrTotal);

        //Valor dos Projetos

        //Percentual de ociosidade

        //Pontuação Total

        //Pontuação FCT Atual

        //Ajuste | %

        //Referencia FCT pela Pontuação Total

        //Referencia FCT Atual | %


    }
}
