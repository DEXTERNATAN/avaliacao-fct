import { Papel } from './../../papel/papel.model';
import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Avaliacao } from './../avaliacao.model';
import { AvaliacaoService } from './../avaliacao.service';
import { PapelService } from 'app/papel/papel.service';

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

    texts: string[];
    public results: string[]=[];

    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private avaliacaoService: AvaliacaoService,
        private papelService: PapelService
    ) {
        this.formAvaliacao = formBuilder.group({
            tipo: [null, Validators.required],
            pontuacao: [null, Validators.required],
            ajuste: [null, Validators.required],
            idColaborador: [null, Validators.required],
            idReferencia: [null, Validators.required],
            idDivisao: [null, Validators.required],
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

    search(event) {
        this.papelService.getPapel().subscribe(papel => {
            let papeis: string[]=[];
            papel.forEach(element => {
                 papeis.push(element.nome);    
            });
            this.results = papeis;
        });
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/avaliacao']);
    }
}