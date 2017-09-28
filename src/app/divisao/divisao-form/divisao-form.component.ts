import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Divisao } from './divisao';
import { DivisaoService } from './../divisao.service';

@Component({
    selector: 'app-divisao-form',
    templateUrl: './divisao-form.component.html',
    styleUrls: ['./divisao-form.component.css']
})
export class DivisaoFormComponent implements OnInit {
    formDivisao: FormGroup;
    title: string;
    divisaos: Divisao = new Divisao();
    idResource: any;
    
    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private divisaoService: DivisaoService
    ) {
        this.formDivisao = formBuilder.group({
            
            sigla: [null, Validators.required],
            nome: [null, Validators.required],
            descricao: [null, Validators.required],
            uf: [null, Validators.required],
            especialidade: [null, Validators.required]
        })
        //console.log('instanciacao: ', this.divisaos)
    }

    ngOnInit() {
        console.log('instanciacao: ', this.divisaos)
        
        var id = this.route.params.subscribe(params => {
            this.idResource= params['id'];
            this.title = this.idResource ? 'Editar Divisão' : 'Nova Divisão';

            if(!this.idResource)
                return;
            
            this.divisaoService.getDivisaoId(this.idResource).subscribe(divisao => {
                divisao = this.divisaos = divisao
                console.log(divisao.id),
                response => {    
                    if(response.status == 404){
                        this.router.navigate(['divisao'])
                    }
                }
            })

        })
    }

    save() {
        var result,
        userValue = this.formDivisao.value;

        
        if (this.idResource){
            debugger
            result = this.divisaoService.updateDivisao(this.idResource, userValue);
        } else {
            result = this.divisaoService.addDivisao(userValue);
        }

        result.subscribe(data => this.router.navigate(['divisao']));
    }

}