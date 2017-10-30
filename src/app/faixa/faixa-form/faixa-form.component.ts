import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Faixa } from './../faixa.model';
import { FaixaService } from './../faixa.service';

@Component({
    selector: 'mt-faixa-form',
    templateUrl: './faixa-form.component.html',
    styleUrls: ['./faixa-form.component.css']
})
export class FaixaFormComponent implements OnInit {

    formFaixa: FormGroup;
    title: string;
    faixa: Faixa = new Faixa();
    idResource: any;

    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private faixaService: FaixaService
    ) {
        this.formFaixa = formBuilder.group({
            limite_inferior: [null, Validators.required],
            limite_superior: [null, Validators.required],
            pontuacao_referencia: [null, Validators.required],
            qtde_pessoas: [null, Validators.required],
            valor_rateio_pessoa: [null, Validators.required],
            percentual: [null, Validators.required],
            tb_colaborador_id_colaborador: [null, Validators.required],
            tb_distribuicao_id_distribuicao: [null, Validators.required]
        })
    }

    hasErrors(): boolean {
        var hasErrors: boolean = false;
        for (var controlName in this.formFaixa.controls) {
            var control: AbstractControl = this.formFaixa.controls[controlName];
            if (!control.valid && !control.pristine) {
                hasErrors = true;
                break;
            }
        }
        return hasErrors;
    }

    ngOnInit() {
        
        var id_resultado = this.route.params.subscribe(params => {
            this.idResource = params['id_faixa'];
            this.title = this.idResource ? 'Editar Faixa' : 'Nova Faixa';

            if (!this.idResource)
                return;
               
            this.faixaService.getFaixaId(this.idResource).subscribe(faixa => {
                faixa = this.faixa = faixa

                    response => {
                        if (response.status == 404) {
                            this.router.navigate(['faixa'])
                        }
                    }
            })

        })
    }

    save() {
        var result,
            userValue = this.formFaixa.value;


        if (this.idResource) {
            result = this.faixaService.updateFaixa(this.idResource, userValue);
        } else {
            result = this.faixaService.addFaixa(userValue);
        }

        result.subscribe(data => this.router.navigate(['faixa']));
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/faixa']);
    }
}