import { Directive, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[validateEqual]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: EqualValidator, multi: true}
  ]
})

export class EqualValidator implements Validator {

    private currentControl: AbstractControl;

    constructor(@Attribute('validateEqual') public validateEqual: string) {}

    validate(c: AbstractControl): { [key: string]: any } {
        this.subscribeToPasswordControlEvents(c);
        const confirmPass = c.value;
        const initialPass = c.root.get(this.validateEqual).value;

        if (initialPass !== confirmPass) {
            return { validateEqual: false };
        }

        return null;
    }

    private subscribeToPasswordControlEvents(c: AbstractControl) {
        if (this.currentControl === undefined) {
            this.currentControl = c;
            const passwordControl = c.root.get(this.validateEqual);
            passwordControl.valueChanges.subscribe(() => this.recheckComparison());
        }
    }

    private recheckComparison() {
        this.currentControl.setValue(this.currentControl.value);
    }
}
