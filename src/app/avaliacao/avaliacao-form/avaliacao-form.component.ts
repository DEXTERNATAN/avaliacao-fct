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
import { Pesos } from './../../pesos/pesos.model';
import { AvaliacaoService } from './../avaliacao.service';
import { ColaboradorService } from './../../colaborador/colaborador.service';
import { DivisaoService } from './../../divisao/divisao.service';
import { PapelService } from './../../papel/papel.service';
import { TecnologiaService } from './../../tecnologia/tecnologia.service';
import { ProjetoService } from './../../projeto/projeto.service';
import { PesosService } from './../../pesos/pesos.service';


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
    Pesos: Pesos[];
    papel: Papel[] = [];
    PapelAtributo2: any[] = [];
    valorCopy: any[];
    PapelAtributo: any[] = [];
    projetosList: number[] = [1];
    valuePapel: string[];
    valueTec: string[];
    current: any[];
    title: string;
    idResource: any;
    vlrTecnologia = 0;
    vlrTotal = 0;
    vlrAtributo = 0;
    vlrProjetos = 0;
    items: FormArray;
    itemsAtributo: FormArray;

    /* Selectize Papel */
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

    /* Selectize Tecnologia */
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
        private projetoService: ProjetoService,
        private pesosService: PesosService
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
            items: this.formBuilder.array([]), // this.createItem()
            itemsAtributo: this.formBuilder.array([]),
            tecnologia: [null],
            qtdProjetos: [0],
            vlrPtTotal: 0.00
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
        this.getPesos();

        this.formAvaliacao.get('vlrPtTotal').setValue('0.00');

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

    getPesos() {
        this.pesosService.getPesos().subscribe(pesos => {
            this.Pesos = pesos;
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
        console.log(this.items.length);
        this.formAvaliacao.get('qtdProjetos').setValue(this.items.length);
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
            Abrangencia: 1,
            Complexidade: 1,
            Impacto: 1,
            letra: letra,
            descricao: descricao
        });
    }

    clearArray() {
        this.formAvaliacao.controls['itemsAtributo'] = this.formBuilder.array([]);
    }

    addProjeto(value: number) {
        this.addItem();
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/avaliacao']);
    }

    getChangeData(idAtributo) {
        let vlrArray: any[] = [];
        this.vlrAtributo = 0;

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
                            this.somaAtributos();
                            this.formAvaliacao.get('vlrPtTotal').setValue(this.vlrAtributo.toFixed(2));
                        }
                    });
                }
            });
        });
    }

    getResetarAtributo(valor) {
        //this.PapelAtributo = [];
        this.clearArray();
    }

    getSomarTecnologia(valor, item) {
        this.vlrTecnologia = this.vlrTecnologia + 1;
    }

    getApagarTecnologia(valor) {
        this.vlrTecnologia = this.vlrTecnologia - 1;
    }

    somaProjetos() {

        this.vlrProjetos = 0;
        let vlrAbrangencia, vlrComplexidade, vlrImpacto: number;
        let projetos = this.formAvaliacao.get('items').value;

        projetos.forEach(element => {
            vlrAbrangencia = parseInt(element.Abrangencia, 10);
            vlrComplexidade = parseInt(element.Complexidade, 10);
            vlrImpacto = parseInt(element.Impacto, 10);
            this.vlrProjetos = this.vlrProjetos + (vlrAbrangencia + vlrComplexidade + vlrImpacto);
            console.log('Total de projetos: ', this.vlrProjetos);
        });

    }

    somaValores() {


        let QtdPapeis, QtdTecnologias, QtdProjetos = 0;

        // Papeis
        QtdPapeis = this.valuePapel.length; // Buscar na Tabela de Pesos o %
        console.log('Papeis: ', QtdPapeis);

        // Tecnologias
        QtdTecnologias = this.valueTec.length;
        console.log('Tecnologia: ', QtdTecnologias);

        // Atributos
        console.log('Atributos: ', this.vlrAtributo);

        // Valor dos Projetos
        QtdProjetos = this.formAvaliacao.get('qtdProjetos').value;
        console.log('Valor Total Projetos = ', 'QtdProjetos: ',QtdProjetos, 'Soma Projetos: ', this.vlrProjetos);

        // Atribuição no valor total
        this.formAvaliacao.get('vlrPtTotal').setValue(this.vlrAtributo.toFixed(2));


        // Calculo dos pesos
        console.log(this.Pesos);
        this.Pesos.forEach(pesos => {
            switch (pesos.tipo) {
                case 'Projeto': {
                    // console.log('Projeto', QtdProjetos, pesos.quantidade);
                    QtdProjetos = 2 ? this.vlrTotal = (QtdProjetos * pesos.valor) : 0;
                    // console.log('Projeto', (QtdProjetos * pesos.valor));
                    break;
                }
                case 'Papel': {
                    debugger
                    console.log('Papel', QtdPapeis, pesos.quantidade, pesos.valor);
                    // QtdPapeis = 2 ? this.vlrTotal = (QtdPapeis * pesos.valor) : 0;
                    // QtdPapeis = (parseFloat(QtdPapeis) * pesos.valor);
                    console.log('papel', QtdPapeis, (QtdPapeis * pesos.valor));
                    break;
                }
                default: {
                    console.log('Outro tipo');
                    break;
                }
            }
        });



        // Percentual de ociosidade

        // Pontuação Total

        // Pontuação FCT Atual

        // Ajuste | %

        // Referencia FCT pela Pontuação Total

        // Referencia FCT Atual | %


    }

    somaAtributos() {

        this.vlrAtributo = 0;
        let vlrAbrangencia, vlrComplexidade, vlrImpacto: number;
        let atributos = this.formAvaliacao.get('itemsAtributo').value;

        atributos.forEach(element => {
            vlrAbrangencia = parseInt(element.Abrangencia, 10);
            vlrComplexidade = parseInt(element.Complexidade, 10);
            vlrImpacto = parseInt(element.Impacto, 10);
            this.vlrAtributo = this.vlrAtributo + (vlrAbrangencia + vlrComplexidade + vlrImpacto);
            console.log('Total atributos: ', this.vlrAtributo);
        });
        this.formAvaliacao.get('vlrPtTotal').setValue(this.vlrAtributo.toFixed(2));
    }

}
