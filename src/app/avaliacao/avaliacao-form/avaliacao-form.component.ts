import { AtributoColaborador } from './../AtributoColaborador.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';
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

import { LoginService } from 'app/security/login/login.service';

import { User } from 'app/security/login/user';

import { AtributoColaboradorService } from './../AtributoColaborador.service';

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
    tecnologia: Tecnologia[] = [];
    Pesos: Pesos[];
    papel: Papel[] = [];
    PapelAtributo2: any[] = [];
    atributoColaborador: AtributoColaborador[];
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
    percAjuste = 0;
    percAjuste2 = 0;
    percAjusteBarra = '';
    classeCss1 = 'badge bg-green';
    classeBarra1 = 'progress-bar progress-bar-success';
    items: FormArray;
    itemsAtributo: FormArray;
    vlrTotal: any;
    vlrSucesso = false;

    public percentMask = [/\d/, /\d/, '.', /\d/, /\d/];

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
        maxItems: 6,
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
        private pesosService: PesosService,
        private atributoColaboradorService: AtributoColaboradorService,
        private loginService: LoginService
    ) { }

    // hasErrors(): boolean {
    //     var hasErrors: boolean = false;
    //     for (var controlName in this.formAvaliacao.controls) {
    //         var control: AbstractControl = this.formAvaliacao.controls[controlName];
    //         if (!control.valid && !control.pristine) {
    //             hasErrors = true;
    //             break;
    //         }
    //     }
    //     return hasErrors;
    // }


    ngOnInit() {

        this.user();

        this.formAvaliacao = this.formBuilder.group({
            divisao: [null, Validators.required],
            colaborador: [null, Validators.required],
            papel: [0],
            tecnologia: [0],
            Projeto: [0],
            items: this.formBuilder.array([]),
            itemsAtributo: this.formBuilder.array([]),
            qtdProjetos: [0],
            vlrPtTotal: 0.00,
            ociosidade: '',
            vlrFCTatual: 0.00,
            ajuste: 0.00,
            referenciaFctAtual: '',
            referenciaFctAvaliacao: ''
        });



        // console.log(this.formAvaliacao);

        this.route.params.subscribe(params => {
            this.idResource = params['id_resultado'];
            this.title = this.idResource ? 'Editar Avaliação' : 'Nova Avaliação';

            if (!this.idResource) {
                return;
            }

            this.avaliacaoService.getAvaliacaoId(this.idResource).subscribe(response => {
                response = this.avaliacao = response;
                // if (response.status === 404) {
                this.router.navigate(['avaliacao']);
                // }
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
                        return el['sigla'] === divisao.sigla;
                    });
                    this.Colaborador = colabFilter;
                });
            }
        );
    }


    user(): User {
        return this.loginService.user;
      }

    registrarAvaliacao() {

        let avaliacaoForm = this.formAvaliacao.value;
        this.somaValores('tudo');
        console.log('Referencia FCT: ', avaliacaoForm.colaborador.referenciaFct);
        // Relacionar colaborador a atributo
        // this.associaColabAtributo(avaliacaoForm);

        this.avaliacaoService.addAvaliacao({
            'id_resultado': 'null',
            'pontuacao': avaliacaoForm.vlrPtTotal,
            'dt_resultado': 'null',
            'ajuste': avaliacaoForm.ajuste,
            'ociosidade': avaliacaoForm.ociosidade,
            'referencia_fct_gfe_pontuacao': avaliacaoForm.referenciaFctAvaliacao,
            'TB_COLABORADOR_id_colaborador': avaliacaoForm.colaborador.idColaborador,
        }).subscribe(data => {
            // console.log(data);
            this.router.navigate(['avaliacao']);
        });

    }

    associaColabAtributo(formAvaliacao: any): any {
        // console.log('AVALIACAO: ', formAvaliacao);
        // this.atributoColaborador.push(
          let teste =   { 
                'TB_COLABORADOR_id_colaborador': 2, 
                'TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe': 59, 
                'TB_COLABORADOR_TB_DIVISAO_id_divisao': 3, 
                'TB_ATRIBUTO_id_atributo': 1, 
                'TB_ATRIBUTO_TB_ABRANGENCIA_id_abrangencia': 1, 
                'TB_ATRIBUTO_TB_COMPLEXIDADE_id_complexidade': 1, 
                'TB_ATRIBUTO_TB_IMPACTO_id_impacto': 1 
            }
        //);

        this.atributoColaboradorService.addAssociacaoAtributoColaborador(teste).subscribe(data => {
            // console.log('ATRIBUTO COLABORADOR: ', data);
        });

    }


    getPapeis() {
        this.papelService.getPapel().subscribe(papel => {
            this.papel = papel;
        });
    }

    getDivisao() {

        let divisaoFilter: any[];
        let idDivisaoUser = this.user().TB_DIVISAO_id_divisao;
        // Verificar se o perfil do usuario logado é de lider = 2
        this.divisaoService.getDivisao().subscribe(divisao => {
            console.log(idDivisaoUser);
            if ( this.user().id_perfil != '1' ) {
                console.log('lider e colaboradora', this.user());
                divisaoFilter = divisao.filter(function (el) {
                    return el['id_divisao'] === idDivisaoUser;
                });
                this.Divisao = divisaoFilter;
            }else {
                console.log('ADMINISTRADOR');
                this.Divisao = divisao;
            }
        });

    }

    getColaborador() {
        this.colaboradorService.getColaborador().subscribe(colaborador => {
            this.Colaborador = colaborador;
            console.log(colaborador);
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

    getItems(formAvaliacao) {
        return formAvaliacao.get('items').controls;
    }

    addItemAtributo(atributo): void {
        this.items = this.formAvaliacao.get('itemsAtributo') as FormArray;
        this.items.push(this.createItemAtributo(atributo));
    }

    createItemAtributo(atributo): FormGroup {
        return this.formBuilder.group({
            Abrangencia: [1, Validators.required],
            Complexidade: [1, Validators.required],
            Impacto: [1, Validators.required],
            letra: atributo.letra,
            descricao: atributo.descricao,
            descricaoAbrangencia1: atributo.descricaoAbrangencia1,
            descricaoAbrangencia2: atributo.descricaoAbrangencia2,
            descricaoAbrangencia3: atributo.descricaoAbrangencia3,
            descricaoComplexidade1: atributo.descricaoComplexidade1,
            descricaoComplexidade2: atributo.descricaoComplexidade2,
            descricaoComplexidade3: atributo.descricaoComplexidade3,
            descricaoImpacto1: atributo.descricaoImpacto1,
            descricaoImpacto2: atributo.descricaoImpacto2,
            descricaoImpacto3: atributo.descricaoImpacto3
        });
    }

    getItemsAtributo(formAvaliacao) {
        // console.log(formAvaliacao.get('itemsAtributo').controls);
        return formAvaliacao.get('itemsAtributo').controls;
    }

    clearArray() {
        this.formAvaliacao.controls['itemsAtributo'] = this.formBuilder.array([]);
    }

    addProjeto() {
        this.addItem();
        this.somaValores('projeto');
    }

    excProjeto(index: any) {
        if (index > 7) {
            this.formAvaliacao.controls['items'] = this.formBuilder.array([]);
        } else {
            this.items = this.formAvaliacao.get('items') as FormArray;
            this.items.removeAt(index);
        }
        this.somaValores('projeto');
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/avaliacao']);
    }

    getChangeData(idAtributo) {
        this.vlrAtributo = 0;
        idAtributo.forEach(element => {

            this.avaliacaoService.getPapelAtributo(element).subscribe((data) => {
                if (data !== []) {
                    data.forEach(arrayPush => {
                        let vlrRepetido = this.PapelAtributo.find(result => result.letra === arrayPush.letra) ? true : false;
                        if (!vlrRepetido) {

                            this.PapelAtributo.push(arrayPush);
                            this.addItemAtributo(arrayPush);

                            this.items.controls.sort(function (a, b) {
                                if (a.value.letra < b.value.letra) {
                                    return -1;
                                } else if (a.value.letra > b.value.letra) {
                                    return 1;
                                } else {
                                    return 0;
                                }
                            });

                            this.somaValores('atributo');
                        }
                    });
                }
            });
        });
    }

    getResetarAtributo(valor) {
        this.PapelAtributo = [];
        this.clearArray();
        this.somaValores('atributo');
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

        if (ajusteAtributos > 0) {
            ajusteAtributos = (13 / (ajusteAtributos / 3));
            this.vlrAtributo = this.vlrAtributo * ajusteAtributos;
        } else {
            this.vlrAtributo = 0.00;
        }
    }

    somaValores(tipo: string) {

        this.vlrTotal = parseFloat(this.formAvaliacao.get('vlrPtTotal').value);

        switch (tipo) {
            case 'atributo': {
                let QtdPapeis = 0;
                QtdPapeis = this.valuePapel.length;
                this.somaAtributos();
                this.Pesos.forEach(pesos => {
                    if ((pesos.tipo == 'Papel') && (parseInt(pesos.quantidade) == QtdPapeis)) {
                        this.vlrAtributo = (this.vlrAtributo * pesos.valor);
                    }
                });
                break;
            }
            case 'tecnologia': {
                this.vlrTecnologia = this.qtdTecnologia;
                this.Pesos.forEach(pesos => {
                    if ((pesos.tipo == 'Tecnologia') && (parseInt(pesos.quantidade) == this.qtdTecnologia)) {
                        this.vlrTecnologia = (this.qtdTecnologia * pesos.valor);
                    }
                });
                break;
            }
            case 'projeto': {
                let QtdProjetos = 0;
                QtdProjetos = this.formAvaliacao.get('qtdProjetos').value;
                this.somaProjetos();
                this.Pesos.forEach(pesos => {
                    if ((pesos.tipo == 'Projeto') && (parseInt(pesos.quantidade) == QtdProjetos)) {
                        this.vlrProjetos = (this.vlrProjetos * pesos.valor);
                    }
                });
                break;
            }
            case 'ociosidade': {
                let frmOciosidade = this.formAvaliacao.get('ociosidade').value || 0.00;
                this.vlrOciosidade = (frmOciosidade / 100);
                break;
            }
            case 'fctatual': {
                // Pontuação FCT Atual
                let colabForm = (this.formAvaliacao.get('colaborador').value.pontuacao || 0).toFixed(2);
                console.log(colabForm);
                this.formAvaliacao.get('vlrFCTatual').setValue(colabForm);

                // Referencia FCT Atual | %
                this.formAvaliacao.get('referenciaFctAtual').setValue(this.formAvaliacao.get('colaborador').value.referenciaFct);

                break;
            }
        }

        this.vlrTotal = (this.vlrAtributo + this.vlrTecnologia + this.vlrProjetos);
        this.vlrTotal = this.vlrTotal - (this.vlrTotal * this.vlrOciosidade);
        this.formAvaliacao.get('vlrPtTotal').setValue(this.vlrTotal.toFixed(2));

        // Ajuste
        this.vlrAjuste = this.formAvaliacao.get('vlrFCTatual').value - this.formAvaliacao.get('vlrPtTotal').value;
        this.formAvaliacao.get('ajuste').setValue(this.vlrAjuste.toFixed(2));

        this.percAjuste = ((this.formAvaliacao.get('vlrFCTatual').value) / (this.formAvaliacao.get('vlrPtTotal').value) * 100);
        this.percAjuste = this.percAjuste - 100;

        // Percentual Ajuste
        if (this.vlrAjuste < 0) {
            this.classeCss1 = "badge bg-red";
            this.classeBarra1 = "progress-bar progress-bar-danger";
            this.percAjuste2 = this.percAjuste * (-1);
            this.percAjusteBarra = this.percAjuste2.toFixed(2) + "%";
        } else {
            this.classeCss1 = "badge bg-green";
            this.classeBarra1 = "progress-bar progress-bar-success";
            if (this.percAjuste > 100) {
                this.percAjuste = 100;
            }
            this.percAjusteBarra = this.percAjuste.toFixed(2) + "%";
        }

        // Referencia FCT pela Pontuação Total
    }


}
