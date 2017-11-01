import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoaderState } from 'app/shared/models/loader-state';
import { LoaderService } from 'app/shared/services/loader.service';

@Component({
    selector: 'avaliacao-loader',
    templateUrl: './loader.component.html',
    styleUrls: [ './loader.component.css' ]
})
export class LoaderComponent implements OnInit {
    
    show = false;
    msg: string;
    private subscription: Subscription;

    constructor(
        private loaderService: LoaderService
    ){}

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    
        this.subscription = this.loaderService.loaderState
        .subscribe((state: LoaderState)=>{
            this.show = state.show;
            this.msg = state.msg;
        })
    }

    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subscription.unsubscribe();        
    }


}