import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    // transform(items: any[], field : string, value : string): any[] {  
    //   if (!items) return [];
    //   if (!value || value.length == 0) return items;
    //   debugger
    //   console.log('Filter');
    //   return items.filter(it => 
    //   it[field].toLowerCase().indexOf(value.toLowerCase()) !=-1);
    // }
    transform(objts: any, term: any): any {
        // check if search terms is undefined
        if(term === undefined) return objts;

        // return updated objts array
        return objts.filter(function(objts){
            return objts.atributo.toLowerCase().includes(term.toLowerCase());
        });

    }
}