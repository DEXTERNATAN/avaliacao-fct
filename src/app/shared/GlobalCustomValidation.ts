import { AbstractControl } from '@angular/forms';

export class GlobalCustomValidation {

    static MatchPassword(AC: AbstractControl) {

        let password = AC.get('senhaNova').value; // to get value in input tag
        let confirmPassword = AC.get('senhaNovaConfirmacao').value; // to get value in input tag

        if (password != null && confirmPassword != null) {
            if (password != confirmPassword) {
                AC.get('senhaNovaConfirmacao').setErrors({ MatchPassword: true });
            } else {
                // console.log('true');
                return null;
            }
        }

    }
}

