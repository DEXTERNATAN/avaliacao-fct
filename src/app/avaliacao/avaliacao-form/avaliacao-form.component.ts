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
    vlrTotal: any;

    formAvaliacao: FormGroup;
    avaliacao: Avaliacao = new Avaliacao();
    Divisao: Divisao[] = [];
    Colaborador: Colaborador[] = [];
    Papel: Papel[] = [];
    Projeto: Projeto[];
    tecnologia: Tecnologia[] = [];
    Pesos: Pesos[];
    papel: Papel[] = [];
    PapelAtributo2: any[] = [];
    valorCopy: any[];
    PapelAtributo: any[] = [];
    projetosList: number[] = [1];
    valuePapel: string[];
    valueTec: string[] = [];
    current: any[];
    title: string;
    idResource: any;
    vlrTecnologia = 0;
    vlrOciosidade = 0;
    qtdTecnologia = 0;
    vlrAtributo = 0;
    vlrProjetos = 0;
    vlrPapeis = 0;
    vlrAjuste = 0.00;
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
        onItemRemove: this.getApagarTecnologia.bind(this),
        onItemAdd: this.getSomarTecnologia.bind(this)
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
            tecnologia: [0],
            Projeto: [0],
            items: this.formBuilder.array([]), // this.createItem()
            itemsAtributo: this.formBuilder.array([]),
            qtdProjetos: [0],
            vlrPtTotal: 0.00,
            ociosidade: 0.00,
            vlrFCTatual: 0.00,
            ajuste: 0.00
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
        this.somaValores('tudo');
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
            this.tecnologia = tecnologia;
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
            Abrangencia: 1,
            Complexidade: 1,
            Impacto: 1,
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
        this.somaValores('projeto');
    }

    excProjeto(){
        this.formAvaliacao.controls['items'] = this.formBuilder.array([]);
        this.somaValores('projeto');
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
                            this.somaValores('atributo');
                        }
                    });
                }
            });
        });
    }

    getResetarAtributo(valor) {
        //this.PapelAtributo = [];
        //this.clearArray();
    }

    getSomarTecnologia(valor) {
        this.qtdTecnologia = this.qtdTecnologia + 1;
        this.somaValores('tecnologia');
    }

    getApagarTecnologia(valor) {
        this.qtdTecnologia = this.qtdTecnologia - 1;
        this.somaValores('tecnologia');
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
        });
    }

    somaAtributos() {

        this.vlrAtributo = 0;
        let qtdAtributos = 0;
        let ajusteAtributos = 0.00;
        let vlrAbrangencia, vlrComplexidade, vlrImpacto: number;
        let atributos = this.formAvaliacao.get('itemsAtributo').value;

        atributos.forEach(element => {
            vlrAbrangencia = parseInt(element.Abrangencia, 10);
            vlrComplexidade = parseInt(element.Complexidade, 10);
            vlrImpacto = parseInt(element.Impacto, 10);
            this.vlrAtributo = this.vlrAtributo + (vlrAbrangencia + vlrComplexidade + vlrImpacto);
            qtdAtributos = qtdAtributos + 1;
            ajusteAtributos = ajusteAtributos + 3;
        });
        ajusteAtributos = (13 / (ajusteAtributos/3));
        this.vlrAtributo = this.vlrAtributo * ajusteAtributos;
    }

    somaValores(tipo: string) {
        
        this.vlrTotal  =  parseFloat(this.formAvaliacao.get('vlrPtTotal').value);

        switch (tipo) {
            case 'atributo': {
                let QtdPapeis = 0;
                QtdPapeis = this.valuePapel.length;
                this.somaAtributos();
                this.Pesos.forEach(pesos => {
                    if ((pesos.tipo == 'Papel') && (parseInt(pesos.quantidade) == QtdPapeis)){
                        this.vlrAtributo = (this.vlrAtributo * pesos.valor);
                    }
                });
                break;
            }
            case 'tecnologia':{
                this.vlrTecnologia = this.qtdTecnologia;
                this.Pesos.forEach(pesos => {
                    if ((pesos.tipo == 'Tecnologia') && (parseInt(pesos.quantidade) == this.qtdTecnologia)) {
                        this.vlrTecnologia = (this.qtdTecnologia * pesos.valor);
                    }    
                });
                break;
            }      
            case 'projeto':{
                let QtdProjetos = 0;
                QtdProjetos = this.formAvaliacao.get('qtdProjetos').value;
                this.somaProjetos();
                this.vlrProjetos = (this.vlrProjetos / QtdProjetos);
                this.Pesos.forEach(pesos => {
                    if ((pesos.tipo == 'Projeto') && (parseInt(pesos.quantidade) == QtdProjetos)) {
                        this.vlrProjetos = (this.vlrProjetos * pesos.valor);
                    }
                });
                break;
            }
            case 'ociosidade': {
                this.vlrOciosidade = (this.formAvaliacao.get('ociosidade').value / 100);
                console.log("valor Total ociosidade: ", this.vlrTotal);
                break;
            }
            case 'tudo': {

                break;
            }    
        }

        this.vlrTotal = (this.vlrAtributo + this.vlrTecnologia + this.vlrProjetos);
        this.vlrTotal = this.vlrTotal - (this.vlrTotal * this.vlrOciosidade);
        this.formAvaliacao.get('vlrPtTotal').setValue(this.vlrTotal.toFixed(2));

        // Pontuação FCT Atual
        this.formAvaliacao.get('vlrFCTatual').setValue(this.vlrAtributo.toFixed(2));
        // Ajuste | %
        this.vlrAjuste = this.formAvaliacao.get('vlrFCTatual').value - this.formAvaliacao.get('vlrPtTotal').value;
        this.formAvaliacao.get('ajuste').setValue(this.vlrAjuste.toFixed(2));

        //((formAvaliacao.get('ajuste').value)/(formAvaliacao.get('vlrFCTatual').value)*100)
        //badge bg-green
        
        // Referencia FCT pela Pontuação Total

        // Referencia FCT Atual | %
        
    }
}