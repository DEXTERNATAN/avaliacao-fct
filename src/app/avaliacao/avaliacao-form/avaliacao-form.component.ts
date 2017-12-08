import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
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
    vlrTecnologia = 0;
    vlrTotal = 0;
    valorAtributo = 0;
    valorProjetos = 0;
    items: FormArray;
    itemsAtributo: FormArray;

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
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private colaboradorService: ColaboradorService,
        private avaliacaoService: AvaliacaoService,
        private papelService: PapelService,
        private tecnologiaService: TecnologiaService,
        private divisaoService: DivisaoService,
        private projetoService: ProjetoService
    ) { }

    // hasErrors(): boolean {
    //     let hasErrors: boolean = false;
    //     for (let controlName in this.formAvaliacao.controls) {
    //         let control: AbstractControl = this.formAvaliacao.controls[controlName];
    //         if (!control.valid && !control.pristine) {
    //             hasErrors = true;
    //             break;
    //         }
    //     }
    //     return hasErrors;
    // }

    ngOnInit() {

        this.formAvaliacao = this.formBuilder.group({
            divisao: [0],
            colaborador: [0],
            papel: [0],
            Projeto: [0],
            items: this.formBuilder.array([this.createItem()]),
            itemsAtributo: this.formBuilder.array([]),
            tecnologia: [null],
            qtdProjetos: [1]
        });



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
        this.somaValores();
        // if (this.idResource) {
        //     result = this.avaliacaoService.updateAvaliacao(this.idResource, userValue);
        // } else {
        //     result = this.avaliacaoService.addAvaliacao(userValue);
        // }

        // result.subscribe(data => this.router.navigate(['avaliacao']));
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
            });
        });
    }

    addItem(): void {
        this.items = this.formAvaliacao.get('items') as FormArray;
        this.items.push(this.createItem());
    }

    createItem(): FormGroup {
        return this.formBuilder.group({
            Abrangencia: [0],
            Complexidade: [0],
            Impacto: [0],
            Projetos: [0]
        });
    }

    addItemAtributo(letra, descricao): void {
        this.items = this.formAvaliacao.get('itemsAtributo') as FormArray;
        this.items.push(this.createItemAtributo(letra, descricao));
    }

    createItemAtributo(letra, descricao): FormGroup {
        return this.formBuilder.group({
            Abrangencia: [0],
            Complexidade: [0],
            Impacto: [0],
            letra: [letra],
            descricao: [descricao]
        });
    }

    clearArray() {
        this.formAvaliacao.controls['itemsAtributo'] = this.formBuilder.array([]);
    }

    addProjeto(value: number) {
        this.addItem();
    }

    excProjeto(){
        this.formAvaliacao.controls['items'] = this.formBuilder.array([]);
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/avaliacao']);
    }

    getChangeData(idAtributo) {
        let vlrArray: any[] = [];
        this.valorAtributo = 0;

        idAtributo.forEach(element => {
            this.avaliacaoService.getPapelAtributo(element).subscribe((data) => {
                if (data !== []) {
                    data.forEach(arrayPush => {
                        let vlrRepetido = this.PapelAtributo.find(result => result.letra === arrayPush.letra) ? true : false;
                        if ( vlrRepetido ) {
                            console.log('REPETIDO', vlrRepetido);
                        }else {

                            this.PapelAtributo.push(arrayPush);
                            this.PapelAtributo.sort(function (a, b) {
                                if (a.letra < b.letra) {
                                    return -1;
                                } else if (a.letra > b.letra) {
                                    return 1;
                                } else {
                                    return 0;
                                }
                            });
                            this.addItemAtributo(arrayPush.letra, arrayPush.descricao);

                        }

                        // Somando os atributos
                        // this.valorAtributo = this.valorAtributo + parseFloat(this.formAvaliacao.get('Abrangencia' + arrayPush.letra).value);
                        // this.valorAtributo = this.valorAtributo + parseFloat(this.formAvaliacao.get('Complexidade' + arrayPush.letra).value);
                        // this.valorAtributo = this.valorAtributo + parseFloat(this.formAvaliacao.get('Impacto' + arrayPush.letra).value);
                        //console.log("LETRA >>> ", arrayPush.letra, "SOMA >>> ", this.valorAtributo);

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

    somaProjetos() {

        this.valorProjetos = 0;
        let vlrAbrangencia, vlrComplexidade, vlrImpacto: number;
        let projetos = this.formAvaliacao.get('items').value;

        projetos.forEach(element => {

            vlrAbrangencia = parseInt(element.Abrangencia, 10);
            vlrComplexidade = parseInt(element.Complexidade, 10);
            vlrImpacto = parseInt(element.Impacto, 10);

            this.valorProjetos = this.valorProjetos + (vlrAbrangencia + vlrComplexidade + vlrImpacto);
            //console.log(this.valorProjetos);
        });
    }

    somaValores() {

        // Tratamento de papeis
        let QtdPapeis = 0;
        QtdPapeis = this.papel.length; // Buscar na Tabela de Pesos o %
        this.vlrTotal = (this.vlrTotal * QtdPapeis);

        // Valor das Tecnologias
        // Buscar o valor na tabela de pesos para Quantidade de tecnologias
        // Buscar na tabela de pesos o %
        let QtdTecnologias = 0;
        QtdTecnologias = this.vlrTecnologia;
        this.vlrTotal = (this.vlrTotal * QtdTecnologias);
        //console.log('Valor Total tecnologias = ', this.vlrTotal);

        // Valor dos Atributos
        this.vlrTotal = this.vlrTotal + this.valorAtributo;
        //console.log(this.vlrTotal, this.formAvaliacao.get('papel').value);
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

        //console.log("VALOR TOTAL >>> ", this.vlrTotal);

        //Valor dos Projetos

        let QtdProjetos = 0;
        QtdProjetos = this.valorProjetos;
        this.vlrTotal = (this.vlrTotal * QtdProjetos);
        //console.log('Valor Total Projetos SOMA= ', this.vlrTotal);
        //console.log('Valor Total Projetos = ', this.valorProjetos);


        //Percentual de ociosidade

        //Pontuação Total

        //Pontuação FCT Atual

        //Ajuste | %

        //Referencia FCT pela Pontuação Total

        //Referencia FCT Atual | %


    }
}