import { FormArray, FormControl, FormGroup } from "@angular/forms";

export class Functions {
    public static isFieldInvalid(formControl: FormControl): boolean {
        return formControl.invalid && (formControl.touched || formControl.dirty);
    }

    public static validateAllFormFields(formGroup: any) {
        // This code also works in IE 11
        Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);

        if (control instanceof FormControl)
            control.markAsTouched({ onlySelf: true });
        else if (control instanceof FormGroup)
            this.validateAllFormFields(control);
        else if (control instanceof FormArray)
            this.validateAllFormFields(control);
        });
    }
}