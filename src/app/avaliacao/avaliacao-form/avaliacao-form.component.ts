import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';
import 'rxjs/Rx';

import * as $ from 'jquery';

import { Avaliacao } from './../avaliacao.model';
import { Colaborador } from './../../colaborador/colaborador.model';
import { Divisao } from './../../divisao/divisao.model';
import { Papel } from './../../papel/papel.model';
import { Tecnologia } from './../../tecnologia/tecnologia.model';
import { Projeto } from './../../projeto/projeto.model';
import { Pesos } from './../../pesos/pesos.model';
import { AtributoColaborador } from './../AtributoColaborador.model';

import { AvaliacaoService } from './../avaliacao.service';
import { ColaboradorService } from './../../colaborador/colaborador.service';
import { DivisaoService } from './../../divisao/divisao.service';
import { PapelService } from './../../papel/papel.service';
import { TecnologiaService } from './../../tecnologia/tecnologia.service';
import { ProjetoService } from './../../projeto/projeto.service';
import { PesosService } from './../../pesos/pesos.service';
import { LoginService } from 'app/security/login/login.service';
import { ReferenciaService } from './../../referencia/referencia.service';
import { TecnologiaColaborador } from './../TecnologiaColaborador.model';

import { ToastrService } from 'ngx-toastr';

import { User } from 'app/security/login/user';
import { AtributoColaboradorService } from './../AtributoColaborador.service';


@Component({
    selector: 'mt-avaliacao-form',
    templateUrl: './avaliacao-form.component.html',
    styleUrls: ['./avaliacao-form.component.css']
})

export class AvaliacaoFormComponent implements OnInit {

    values = '';
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
    tecnologiaColaborador: TecnologiaColaborador[];
    valorCopy: any[];
    PapelAtributo: any[] = [];
    projetosList: number[] = [1];
    valuePapel: string[];
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
    papelValidacao: boolean;
    tecnologiaValidacao: boolean;
    ProjetosValidacao: boolean;
    valorFCTPontuaçãoTotal: any;

    public percentMask = [/[0-9]*/, '.', /[0-9]*/];

    /* Select Papel */
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
        onChange: this.getChangeData.bind(this),
        onFocus: this.getValidacaoSelectize.bind(this)
    };

    /* Select Tecnologia */
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
        onItemAdd: this.getSomarTecnologia.bind(this),
        onFocus: this.getValidacaoSelectizeTec.bind(this)
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
        private loginService: LoginService,
        private referenciaService: ReferenciaService,
        private mensagensHandler: MensagensHandler,
        private toastr: ToastrService
    ) { }

    ngOnInit() {

        this.user();
        this.mensagensHandler.handleClearMessages();
        this.formAvaliacao = this.formBuilder.group({
            divisao: [null, Validators.required],
            colaborador: [null, Validators.required],
            papel: [null, Validators.compose([Validators.required])],
            tecnologia: [0, Validators.compose([Validators.required])],
            Projeto: [0],
            items: this.formBuilder.array([], Validators.compose([Validators.required])),
            itemsAtributo: this.formBuilder.array([]),
            qtdProjetos: [0],
            vlrPtTotal: 0.00,
            ociosidade: [''],
            vlrFCTatual: 0.00,
            ajuste: 0.00,
            referenciaFctAtual: '',
            FCTPontuaçãoTotal: ''
        });

        this.papelValidacao = false;
        this.tecnologiaValidacao = false;
        this.ProjetosValidacao = false;

        this.route.params.subscribe(params => {
            this.idResource = params['id_resultado'];
            this.title = this.idResource ? 'Editar Avaliação' : 'Nova Avaliação';

            if (!this.idResource) {
                return;
            }

            this.avaliacaoService.getAvaliacaoId(this.idResource).subscribe(response => {
                response = this.avaliacao = response;
                this.router.navigate(['avaliacao']);
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

        // se inscrece para verificar alterações no valor total da pontuação
        this.formAvaliacao.get('vlrPtTotal').valueChanges.subscribe(
            dataVlrTotal => {
                let valorAnterior = 0;
                let valorX = 0;
                this.referenciaService.getReferencia().subscribe(
                    data => {
                        data.forEach(dadosReferencia => {

                            let valorA: number = this.formAvaliacao.get('vlrFCTatual').value;
                            let valorB: number = this.formAvaliacao.get('colaborador').value.valorReferenciaFct;
                            let valorC: number = dataVlrTotal;
                            let vlrValorFct = '';

                            valorX = (valorB * valorC);
                            valorX = (valorX / valorA);

                            if (dadosReferencia.cargo == this.formAvaliacao.get('colaborador').value.cargo) {
                                if (valorAnterior == 0) {

                                    vlrValorFct = (dadosReferencia.num_referencia + ' - ' +
                                        dadosReferencia.cargo + ' (R$ ' + dadosReferencia.valor_referencia + ')');
                                    this.formAvaliacao.get('FCTPontuaçãoTotal').setValue(vlrValorFct);

                                    this.valorFCTPontuaçãoTotal = dadosReferencia.num_referencia;

                                    valorAnterior = 1;

                                } else if (valorX > parseFloat(dadosReferencia.valor_referencia)) {
                                    vlrValorFct = (dadosReferencia.num_referencia + ' - ' +
                                        dadosReferencia.cargo + ' (R$ ' + dadosReferencia.valor_referencia + ')');
                                    this.formAvaliacao.get('FCTPontuaçãoTotal').setValue(vlrValorFct);
                                    this.valorFCTPontuaçãoTotal = dadosReferencia.num_referencia;


                                }

                            }

                        });
                    },
                    // error => (console.log('Error: ', error))
                );
            }
        );
    }

    getValidacaoSelectizeTec() {
        if (this.formAvaliacao.get('tecnologia').value.length === 0) {
            this.tecnologiaValidacao = true;
        } else {
            this.tecnologiaValidacao = false;
        }
    }

    getValidacaoSelectize() {
        this.papelValidacao = true;
    }

    user(): User {
        return this.loginService.user;
    }

    registrarAvaliacao() {

        let avaliacaoForm = this.formAvaliacao.value;
        this.somaValores('tudo');

        // Enviar apenas um objeto para o serviço e deixar que o mesmo faça tudo
        this.avaliacaoService.addAvaliacao({
            'pontuacao': (avaliacaoForm.vlrPtTotal || 39.00),
            'ajuste': (avaliacaoForm.ajuste || 0.00),
            'ociosidade': (avaliacaoForm.ociosidade || 0.00),
            'referencia_fct_gfe_pontuacao': (this.valorFCTPontuaçãoTotal || 0),
            'TB_COLABORADOR_id_colaborador': (avaliacaoForm.colaborador.idColaborador),
            'TB_COLABORADOR_TB_DIVISAO_id_divisao': avaliacaoForm.divisao.id_divisao,
            'TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe': avaliacaoForm.colaborador.id_referencia_fct_gfe,
            'papel': avaliacaoForm.papel,
            'projetos': avaliacaoForm.items,
            'tecnologia': avaliacaoForm.tecnologia,
            'atributos': avaliacaoForm.itemsAtributo
        }).subscribe(data => {

            if (data) {

                /*
                ** Versão 02
                ** Agora o serviço da api faz todo o serviço de inserção tanto na tabela de resultado quanto nas tabelas associativas **
                */

                /*
                ** Versão 01
                ** Codigo da versão 01 fazendo uso de serviços separados para inserção na tabela de resultado **
                ** e tambem nas tabelas associativas **
                */
                // console.log('Max id: ', data);

                // Associação entre colaborador e papel
                this.associarColaboradorPapel(avaliacaoForm, data);

                // Associação entre colaborador e Projeto
                this.associarColaboradorProjeto(avaliacaoForm, data);

                // Associação entre colaborador e tecnologia
                this.associarColaboradorTecnologia(avaliacaoForm, data);

                // Associação entre colaborador e atributo
                this.associarColaboradorAtributo(avaliacaoForm, data);

                // Associacao entre atributo e projeto
                this.associarAtributoProjeto(avaliacaoForm, data);

                this.router.navigate(['avaliacao']);

                this.toastr.success('Avaliação registrada com sucesso!', 'Sucesso', {
                    progressBar: true,
                    progressAnimation: 'increasing',
                    closeButton: true,
                    timeOut: 3000
                });

            }

        });
    }

    associarColaboradorAtributo(formAvaliacao: any, maxId: any): any {
        let AssociaAtributo: AtributoColaborador;

        formAvaliacao.itemsAtributo.forEach(element => {
            this.avaliacaoService.getBuscaAtributo(element.Abrangencia, element.Complexidade, element.Impacto, element.letra).subscribe(
                dataAtributo => {
                    if (dataAtributo) {

                        AssociaAtributo = {
                            'TB_COLABORADOR_id_colaborador': formAvaliacao.colaborador.idColaborador,
                            'TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe': formAvaliacao.colaborador.id_referencia_fct_gfe,
                            'TB_COLABORADOR_TB_DIVISAO_id_divisao': formAvaliacao.divisao.id_divisao,
                            'TB_ATRIBUTO_id_atributo': dataAtributo.id_atributo,
                            'TB_ATRIBUTO_TB_ABRANGENCIA_id_abrangencia': dataAtributo.id_abrangencia,
                            'TB_ATRIBUTO_TB_COMPLEXIDADE_id_complexidade': dataAtributo.id_complexidade,
                            'TB_ATRIBUTO_TB_IMPACTO_id_impacto': dataAtributo.id_impacto,
                            'TB_RESULTADO_id_resultado': maxId // [Buscar o último ID da tabela TB_RESULTADO +1]
                        };

                        this.atributoColaboradorService.addAssociacaoAtributoColaborador(AssociaAtributo).subscribe(data => { });

                    }
                }
            );
        });

    }

    associarColaboradorTecnologia(formAvaliacao: any, maxId: any): any {
        let associacaoColaboradorTecnologia: any;

        formAvaliacao.tecnologia.forEach(Idtecnologia => {

            associacaoColaboradorTecnologia = {
                'TB_TECNOLOGIA_id_tecnologia': Idtecnologia,
                'TB_COLABORADOR_id_colaborador': formAvaliacao.colaborador.idColaborador,
                'TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe': formAvaliacao.colaborador.id_referencia_fct_gfe,
                'TB_COLABORADOR_TB_DIVISAO_id_divisao': formAvaliacao.divisao.id_divisao,
                'TB_RESULTADO_id_resultado': maxId
            };

            this.avaliacaoService.addAssociacaoColaboradorTecnologia(associacaoColaboradorTecnologia).subscribe(data => {
                console.log('OK - Associações incluidas com sucesso', data);
            });

        });
    }

    associarColaboradorPapel(formAvaliacao: any, maxId: any): any {
        let associacaoColaboradorPapel: any;

        formAvaliacao.papel.forEach(Idpapel => {
            // console.log('Maxid: ', maxId);
            associacaoColaboradorPapel = {
                'TB_PAPEL_id_papel': Idpapel,
                'TB_COLABORADOR_id_colaborador': formAvaliacao.colaborador.idColaborador,
                'TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe': formAvaliacao.colaborador.id_referencia_fct_gfe,
                'TB_COLABORADOR_TB_DIVISAO_id_divisao': formAvaliacao.divisao.id_divisao,
                'TB_RESULTADO_id_resultado': maxId
            };

            this.avaliacaoService.addAssociacaoColaboradorPapel(associacaoColaboradorPapel).subscribe(data => {
                console.log(' **** --- Associações Papel Colaborador', data);
            });

        });
    }

    associarColaboradorProjeto(formAvaliacao: any, maxId: any): any {
        let associacaoColaboradorProjeto: any;

        formAvaliacao.items.forEach(idProjeto => {

            console.log('PROJETO > : ', parseInt(idProjeto.Projetos, 9));

            associacaoColaboradorProjeto = {
                'TB_PROJETO_id_projeto': idProjeto.Projetos,
                'TB_COLABORADOR_id_colaborador': formAvaliacao.colaborador.idColaborador,
                'TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe': formAvaliacao.colaborador.id_referencia_fct_gfe,
                'TB_COLABORADOR_TB_DIVISAO_id_divisao': formAvaliacao.divisao.id_divisao,
                'TB_RESULTADO_id_resultado': maxId
            };

            this.avaliacaoService.addAssociacaoColaboradorProjeto(associacaoColaboradorProjeto).subscribe(data => {
                console.log(' **** --- Associações Projeto Colaborador', data);
            });

        });
    }

    associarAtributoProjeto(formAvaliacao: any, maxId: any): any {
        let associacaoAtributoProjeto: any;
        let AssociaAtributo: any;

        formAvaliacao.items.forEach(projetos => {
            // console.log('PROJETO > : ', projetos, projetos.Abrangencia, projetos.Complexidade, projetos.Complexidade);
            console.log('MaxID: ', maxId);
            console.log('Projeto: ', projetos);
            this.avaliacaoService.getBuscaAtributo(projetos.Abrangencia, projetos.Complexidade, projetos.Impacto, 'p').subscribe(
                dataAtributo => {
                    if (dataAtributo) {
                        //debugger
                        associacaoAtributoProjeto = {
                            'TB_ATRIBUTO_id_atributo': dataAtributo.id_atributo,
                            'TB_PROJETO_id_projeto': projetos.Projetos,
                            'TB_RESULTADO_id_resultado': maxId
                        };
                        console.log('associacaoAtributoProjeto: ', associacaoAtributoProjeto);

                        // console.log('RESULTADO: ', dataAtributo, associacaoAtributoProjeto, projetos);
                        this.avaliacaoService.addAssociacaoAtributoProjeto(associacaoAtributoProjeto).subscribe(data => {
                            console.log(' **** --- Associações Atributo com Projeto', data);
                        });

                        AssociaAtributo = {
                            'TB_COLABORADOR_id_colaborador': formAvaliacao.colaborador.idColaborador,
                            'TB_COLABORADOR_TB_REFERENCIA_FCT_GFE_id_referencia_fct_gfe': formAvaliacao.colaborador.id_referencia_fct_gfe,
                            'TB_COLABORADOR_TB_DIVISAO_id_divisao': formAvaliacao.divisao.id_divisao,
                            'TB_ATRIBUTO_id_atributo': dataAtributo.id_atributo,
                            'TB_ATRIBUTO_TB_ABRANGENCIA_id_abrangencia': dataAtributo.id_abrangencia,
                            'TB_ATRIBUTO_TB_COMPLEXIDADE_id_complexidade': dataAtributo.id_complexidade,
                            'TB_ATRIBUTO_TB_IMPACTO_id_impacto': dataAtributo.id_impacto,
                            'TB_RESULTADO_id_resultado': maxId // [Buscar o último ID da tabela TB_RESULTADO +1]
                        };

                        this.atributoColaboradorService.addAssociacaoAtributoColaborador(AssociaAtributo).subscribe(data => { });

                    }
                }
            );



        });

    }


    getPapeis() {
        this.papelService.getPapel().subscribe(papel => {
            let papelFilter: any[];
            papel.forEach(element => {
                papelFilter = papel.filter(
                    el => {
                        return el['possuiAtributo'] !== null;
                    }
                );
            });
            this.papel = papelFilter;
        });
    }

    getDivisao() {

        let divisaoFilter: any[];
        let idDivisaoUser = this.user().TB_DIVISAO_id_divisao;
        let perfilColaborador = this.user().ds_perfil.toUpperCase();

        // Verificar o perfil do usuario logado
        this.divisaoService.getDivisao().subscribe(divisao => {
            if (perfilColaborador !== 'ADMINISTRADOR') {
                divisaoFilter = divisao.filter(function (el) {
                    return el['id_divisao'] === idDivisaoUser;
                });
                this.Divisao = divisaoFilter;
            } else {
                this.Divisao = divisao;
            }
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
        this.formAvaliacao.get('qtdProjetos').setValue(this.items.length);
    }

    createItem(): FormGroup {
        return this.formBuilder.group({
            Abrangencia: 1,
            Complexidade: 1,
            Impacto: 1,
            Projetos: [null, [Validators.required]]
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
            idAtributo: atributo.id_atributo,
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
        if (index > 6) {
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

        let strValida: string[] = idAtributo;

        if (strValida.length === 0) {
            this.papelValidacao = true;
        } else {
            this.papelValidacao = false;
        }

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
        if (this.formAvaliacao.get('tecnologia').value.length) {
            this.tecnologiaValidacao = false;
        }
        this.qtdTecnologia = this.qtdTecnologia + 1;
        this.somaValores('tecnologia');
    }

    getApagarTecnologia(valor) {
        if (this.formAvaliacao.get('tecnologia').value.length === 0) {
            this.tecnologiaValidacao = true;
        }
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

        let qtdAtributos = 0;
        let ajusteAtributos = 0.00;
        let vlrAbrangencia, vlrComplexidade, vlrImpacto: number;
        let atributos = this.formAvaliacao.get('itemsAtributo').value;

        this.vlrAtributo = 0;

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

                this.valuePapel = this.formAvaliacao.get('papel').value;
                QtdPapeis = this.valuePapel.length;
                this.somaAtributos();
                this.Pesos.forEach(pesos => {
                    if ((pesos.tipo === 'Papel') && (parseInt(pesos.quantidade, 0) === QtdPapeis)) {
                        this.vlrAtributo = (this.vlrAtributo * pesos.valor);
                    }
                });
                break;
            }
            case 'tecnologia': {
                this.vlrTecnologia = this.qtdTecnologia;
                this.Pesos.forEach(pesos => {
                    if ((pesos.tipo === 'Tecnologia') && (parseInt(pesos.quantidade, 0) === this.qtdTecnologia)) {
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
                    if ((pesos.tipo === 'Projeto') && (parseInt(pesos.quantidade, 0) === QtdProjetos)) {
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
                let pontuacao1 = (this.formAvaliacao.get('colaborador').value.pontuacao_inicial || 1).toFixed(2);
                let valor1 = (this.formAvaliacao.get('colaborador').value.valorFctInicial || 1).toFixed(2);
                let valor2 = (this.formAvaliacao.get('colaborador').value.valorReferenciaFct || 1).toFixed(2);

                // Cálculo Pontuação de Referência
                let calculoReferencia = ((pontuacao1 * valor2) / valor1).toFixed(2);

                this.formAvaliacao.get('vlrFCTatual').setValue(calculoReferencia);

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
            this.classeCss1 = 'badge bg-red';
            this.classeBarra1 = 'progress-bar progress-bar-danger';
            this.percAjuste2 = this.percAjuste * (-1);
            this.percAjusteBarra = this.percAjuste2.toFixed(2) + '%';
        } else {
            this.classeCss1 = 'badge bg-green';
            this.classeBarra1 = 'progress-bar progress-bar-success';

            if (this.percAjuste > 100) {
                this.percAjuste = 100;
            } else if (isNaN(this.percAjuste)) {
                this.percAjuste = 0;
            }

            this.percAjusteBarra = this.percAjuste.toFixed(2) + '%';
        }
    }

    formataOciosidade(event: any) {
        // if (event.keyCode !== 8) {
        //     if (event.target.value.length === 1) {
        //         event.target.value = ("000.0" + event.target.value).slice(-5)
        //     } else if (event.target.value.length === 2) {
        //         event.target.value = ("0000." + event.target.value).slice(-5)
        //     } else if (event.target.value.length === 3) {
        //         var strValue = ("00" + event.target.value).slice(-4);
        //         var parte1 = strValue.substring(0,2);
        //         var parte2 = strValue.substring(2,5);
        //         event.target.value = parte1 + '.' + parte2;
        //     } else if (event.target.value.length === 4) {
        //         var strValue1 = event.target.value;
        //         var parte01 = strValue1.substring(0,2);
        //         var parte02 = strValue1.substring(2,5);
        //         event.target.value = parte01 + '.' + parte02;
        //     }
        //     // if (event.target.value.length === 1) {
        //     //     event.target.value = "00.0" + event.target.value;
        //     // } else if (event.target.value.length === 2) {
        //     //     event.target.value = event.target.value + "." + "00";
        //     // } else if (event.target.value.length === 3) {
        //     //     event.target.value = event.target.value + "00";
        //     // } else if (event.target.value.length === 4) {
        //     //     event.target.value = event.target.value + "0";
        //     // }
        // }

        return event;
    }


    formataData(event: any) {
        // console.log(event.target.value.length, event.keyCode);

        if (event.keyCode !== 8) {
            // if (event.target.value.length === 2) {
            //     event.target.value = event.target.value + ".";
            // }
            //  else if (event.target.value.length === 3) {
            //     event.target.value = event.target.value + "00";
            // } else if (event.target.value.length === 4) {
            //     event.target.value = event.target.value + "0";
            // }
        }

        return event;
    }


    somenteNumeros(event: any) {
        var er = /[^0-9]/;
        er.lastIndex = 0;
        var campo = event.target;
        if (er.test(campo.value)) {
          campo.value = "";
        }
    }

}
