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
		//onChange: this.getSomarTecnologia.bind(this)

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
			abrangenciaa: [1],
			abrangenciab: [1],
			abrangenciac: [1],
			abrangenciad: [1],
			abrangenciae: [1],
			abrangenciaf: [1],
			abrangenciag: [1],
			abrangenciah: [1],
			abrangenciai: [1],
			abrangenciaj: [1],
			abrangenciak: [1],
			abrangencial: [1],
			abrangenciam: [1],
			abrangencian: [1],
			complexidadea: [1],
			complexidadeb: [1],
			complexidadec: [1],
			complexidaded: [1],
			complexidadee: [1],
			complexidadeg: [1],
			complexidadeh: [1],
			complexidadei: [1],
			complexidadej: [1],
			complexidadek: [1],
			complexidadel: [1],
			complexidadem: [1],
			complexidaden: [1],
			complexidadef: [1],
			impactoa: [1],
			impactob: [1],
			impactoc: [1],
			impactod: [1],
			impactoe: [1],
			impactof: [1],
			impactog: [1],
			impactoh: [1],
			impactoi: [1],
			impactoj: [1],
			impactok: [1],
			impactol: [1],
			impactom: [1],
			impacton: [1],
			tecnologia: [null],
			qtdProjetos: [1],
			pontuacaoTotal: [0]
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

		console.log(this.formAvaliacao.value);

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
		//this.somaValores();

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
			this.Projeto.sort(function(a,b){
				if(a.cod_servico < b.cod_servico){
					return -1;
				}else if(a.cod_servico > b.cod_servico){
					return 1;
				}else{
					return 0;
				}
			})
		});
	}

	addProjeto(value: number) {

		var numbers = [value];
		var tamanho = value;
		var i = 0;
		this.projetosList = [];
		
		for (i; i < tamanho; i++) {
			this.projetosList.push(value);
		}
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
						this.PapelAtributo.sort(function(a,b){
							if(a.letra < b.letra){
								return -1;
							}else if(a.letra > b.letra){
								return 1;
							}else{
								return 0;
							}
						});
					});
				}		
			});
		});
		this.somaValores();
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

	private somaValores(){
		
		//this.vlrTotal = 0;

		//Valor dos papeis
		//Buscar o valor na tabela de pesos para QtdPapeis
		var QtdPapeis = 0;
		QtdPapeis = this.papel.length; //Buscar na Tabela de Pesos o %

		//this.vlrTotal = (this.vlrTotal * QtdPapeis); 
				
		
		//Valor das Tecnologias
		//Buscar o valor na tabela de pesos para Quantidade de tecnologias
		var QtdTecnologias = 0;
		QtdTecnologias = this.vlrTecnologia; //Buscar na tabela de pesos o %

		//this.vlrTotal = (this.vlrTotal * QtdTecnologias);
		//console.log("Valor Total tecnologias = ", this.vlrTotal);

		//Somar o valor dos Atributos que estão sendo exibidos
		var i = 0;
		var j = 0;
		var valorAtributo = 0;
		var letra = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n'];
		var tamanhoLetra = letra.length;
		var tamanho = this.PapelAtributo.length;

		for (i; i < tamanho; i++) {
			for (j; j < tamanhoLetra; j++) {
				if(this.PapelAtributo[i].letra == letra[j]){
					console.log("Letra no IF >>> ", letra[j]);
					console.log("Abrangencia >>> ", this.formAvaliacao.get('abrangencia' + letra[j]).value);
					console.log("Complexidade >>> ", this.formAvaliacao.get('complexidade' + letra[j]).value);
					console.log("Impacto >>> ", this.formAvaliacao.get('impacto' + letra[j]).value);

					valorAtributo = parseFloat(this.formAvaliacao.get('abrangencia' + letra[j]).value);
					valorAtributo = valorAtributo + parseFloat(this.formAvaliacao.get('complexidade' + letra[j]).value);
					valorAtributo = valorAtributo + parseFloat(this.formAvaliacao.get('impacto' + letra[j]).value);
					this.vlrTotal = this.vlrTotal + valorAtributo;
				}
			}	
		}
		
		console.log("VALOR TOTAL >>> ", this.vlrTotal);
		//this.formAvaliacao.setValue('pontuacaoTotal') = this.vlrTotal;

		//Valor dos Projetos
		//Buscar o valor do pesos da quantidade de projetos na tabela TB_PESOS

		//Percentual de ociosidade
		//Diminuir percentual de ociosidade do Total Parcial 

		//Pontuação Total
		//colocar o valor da pontuação do campo Pontuação Total

		//Pontuação FCT Atual
		//Buscar o valor mais próximo da FCT que corresponde a pontuação

		//Ajuste | %
		//Diferença entre os valores

		//Referencia FCT pela Pontuação Total
		//Mostrar a referencia de FCT de acordo com a Pontuação Total

		//Referencia FCT Atual | %

		
	}
}