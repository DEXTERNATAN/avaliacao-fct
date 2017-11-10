import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Select2Module,Select2OptionData } from 'ng2-select2';

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

    formAvaliacao: FormGroup;
    title: string;
    avaliacao: Avaliacao = new Avaliacao();
    idResource: any;

    public exampleData: Array<Select2OptionData>;

    Divisao: Divisao[] = [];
    Colaborador: Colaborador[] = [];
    Papel: Papel[] = [];
    Tecnologia: Tecnologia[] = [];
    
    private papeisResultado: string[]=[];
    private tecnologiaResultado: string[]=[];

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
            sigla: [null, Validators.required],
            nome: [null, Validators.required],
            papeisResultado: [null, Validators.required],
            tecnologiaResultado: [null, Validators.required]
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
        
        this.exampleData = [
            {
                id: 'basic1',
                text: 'Basic 1'
            },
            {
                id: 'basic2',
                disabled: true,
                text: 'Basic 2'
            },
            {
                id: 'basic3',
                text: 'Basic 3'
            },
            {
                id: 'basic4',
                text: 'Basic 4'
            }
        ];

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
            })

        })
    }

    save() {
        var result,
            userValue = this.formAvaliacao.value;


        if (this.idResource) {
            result = this.avaliacaoService.updateAvaliacao(this.idResource, userValue);
        } else {
            result = this.avaliacaoService.addAvaliacao(userValue);
        }

        result.subscribe(data => this.router.navigate(['avaliacao']));
    }

    searchPapeis(event) {
        this.papelService.getPapel().subscribe(papel => {
            let papeis: string[]=[];
            papel.forEach(element => {
                 papeis.push(element.nome);    
            });
            this.papeisResultado = papeis;
        });
    }

    searchTecnologia(event) {
        this.tecnologiaService.getTecnologia().subscribe(tecnologia => {
            let tecnologias: string[]=[];
            tecnologia.forEach(element => {
                 tecnologias.push(element.tipo + " - " + element.nome);    
            });
            this.tecnologiaResultado = tecnologias;
        });
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/avaliacao']);
    }
}