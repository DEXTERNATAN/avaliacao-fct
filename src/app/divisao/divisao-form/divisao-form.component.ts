import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'

import { Divisao } from './../divisao.model';
import { DivisaoService } from './../divisao.service';

@Component({
    selector: 'app-divisao-form',
    templateUrl: './divisao-form.component.html',
    styleUrls: ['./divisao-form.component.css']
})
export class DivisaoFormComponent implements OnInit {
    form: FormGroup;
    title: string;
    divisao: Divisao[];

    constructor(
        formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private divisaoService: DivisaoService
    ) { }

    ngOnInit() { }



}