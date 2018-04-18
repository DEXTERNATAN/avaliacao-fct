import { ToastrService } from 'ngx-toastr';
import { MensagensHandler } from 'app/shared/services/mensagens-handler.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Papel } from './../papel.model';
import { PapelService } from './../papel.service';
import { LoaderService } from 'app/shared/services/loader.service';
import { AtributoService } from './../../atributo/atributo.service';

@Component({
    selector: 'app-papel-form',
    templateUrl: './papel-form.component.html',
    styleUrls: ['./papel-form.component.css']
})
export class PapelFormComponent implements OnInit {

    listAtributos: Papel[];
    formPapel: FormGroup;
    title: string;
    papeis: Papel = new Papel();
    listPapel: Papel[] = [];
    idResource: any;
    stPapel = false;
    isOpen = false;
    atributo: FormArray;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private papelService: PapelService,
        private loaderService: LoaderService,
        private mensagensHandler: MensagensHandler,
        private atributoService: AtributoService,
        private toastr: ToastrService
    ) {
        this.formPapel = formBuilder.group({
            tipo: [null, [Validators.required]],
            nome: [null, [Validators.required]],
            atributo: this.formBuilder.array([], Validators.required),
            descricao: [null, Validators.required]
        })
    }

    ngOnInit() {

        this.loaderService.setMsgLoading('Carregando ...');
        this.mensagensHandler.handleClearMessages();
        this.papelService.getPapel().subscribe(papelList => {
            this.listPapel = papelList;
            // console.log(papelList);
        });
        this.papelService.getAtributoPapel().subscribe(atribts => {
            atribts.forEach(element => {
                this.addIPapelList(element);
            });
        });

        this.route.params.subscribe(params => {
            this.idResource = params['id_papel'];
            this.title = this.idResource ? 'Editar Papel' : 'Novo Papel';

            if (!this.idResource) {
                return;
            };

            this.papelService.getPapelId(this.idResource).subscribe(
                papel => {

                    this.papeis = papel;

                    response => {
                        if (response.status == 404) {
                            this.router.navigate(['papel'])
                        }
                    }
                }
            );
        });

        // filtrar o papel 
        this.formPapel.get('tipo').valueChanges.subscribe(value => {
            let listaNomePapel: any[];
            this.papelService.getPapel().subscribe(papelList => {
                listaNomePapel = papelList.filter(function (data) {
                    return data['tipo'] === value;
                });
                this.listPapel = listaNomePapel;
            });
        });

    }


    carregaAtributos(atributos: any) {
        this.isOpen = !this.isOpen;

        // Marca os atributos de acordo com o banco de dados para o
        this.frmPapeis.controls.forEach(function (controles, index) {
            if (atributos) {
                atributos.forEach(element => {
                    if (controles.get('idAtributo').value == element.id_atributo) {
                        controles.get('ativado').setValue(true);
                    }
                });
            }
        })


    }

    get frmPapeis(): FormArray { return this.formPapel.get('atributo') as FormArray; }

    getPapelList(formPapel) {
        return formPapel.get('atributo').controls;
    }

    addIPapelList(papel): void {
        this.atributo = this.formPapel.get('atributo') as FormArray;
        this.atributo.push(this.createPapelList(papel));
    }

    createPapelList(papel): FormGroup {
        return this.formBuilder.group({
            idAtributo: papel.idAtributo,
            descricao: papel.descricao,
            letra: papel.letra,
            ativado: false
        });
    }

    save() {

        let result, userValue = this.formPapel.value;
        let atualizar: boolean;

        if (this.idResource) {
            atualizar = true;
            this.loaderService.setMsgLoading('Atualizando papel ...');
            result = this.papelService.updatePapel(this.idResource, userValue);
        } else {
            atualizar = false;
            this.loaderService.setMsgLoading('Salvando papel ...');
            result = this.papelService.addPapel(userValue);
        }

        result.subscribe(
            data => {
                // console.log('ULTIMO ID: ', data);
                if (atualizar) {
                    this.associarAtributoPapel('editar', this.idResource);
                    this.toastr.success('Papel atualizado com sucesso!', 'Sucesso', {
                        progressBar: true,
                        progressAnimation: 'increasing',
                        closeButton: true,
                        timeOut: 3000
                    });
                } else {
                    this.associarAtributoPapel('novo', this.idResource);
                    this.toastr.success('Papel salvo com sucesso!', 'Sucesso', {
                        progressBar: true,
                        progressAnimation: 'increasing',
                        closeButton: true,
                        timeOut: 3000
                    });
                }
                this.router.navigate(['papel']);
            });

    }

    associarAtributoPapel(metodo: string, idPapel?: number) {
        
        if (metodo === 'editar') {

            this.atributo.controls.forEach(element => {
                if (element.value.ativado) {
                    let associacaoAtributoPapel: any = {
                        TB_ATRIBUTO_id_atributo: element.value.idAtributo,
                        TB_PAPEL_id_papel: idPapel
                    };
                    this.papelService.addAtributoPapel(associacaoAtributoPapel).subscribe(data => { });
                }
            });

        } else {
            
            this.papelService.getMaxId().subscribe(value => {
                this.atributo.controls.forEach(element => {
                    if (element.value.ativado) {
                        let associacaoAtributoPapel: any = {
                            TB_ATRIBUTO_id_atributo: element.value.idAtributo,
                            TB_PAPEL_id_papel: value[0].maxid
                        };
                        this.papelService.addAtributoPapel(associacaoAtributoPapel).subscribe(data => { });
                    }
                });
            });

        }

    }

    onChange(e) {
        if (e === '0') {
            this.stPapel = true;
            this.formPapel.get('nome').setValue('');
        }
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/papel']);
    }

}
