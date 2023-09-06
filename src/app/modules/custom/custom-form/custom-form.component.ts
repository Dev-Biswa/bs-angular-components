import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Functions } from "src/app/common/functions";

interface Food {
    value: string;
    id: number;
}

@Component({
    selector: 'app-custom-form',
    templateUrl: './custom-form.component.html',
    styleUrls: ['./custom-form.component.scss']
})

export class CustomFormComponent implements OnInit {
    customForm: FormGroup;
    gender: Food[] = [
        { value: 'Male', id: 0 },
        { value: 'Female', id: 1 },
        { value: 'Other', id: 2 },
    ];
    constructor(
        public fb: FormBuilder,
        
    ) { }

    ngOnInit(): void {
        this.formInit();
    }


    formInit() {
        this.customForm = this.fb.group({
            name: ['', Validators.required],
            gender: ['', Validators.required],
            phoneNumber: ['', [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(10)]],
            email: ['', [Validators.required, Validators.email]]
        });
    }

    onSave() {
        if (this.customForm.valid) {
            const formValue = this.customForm.value;
            console.log(formValue);
        } else Functions.validateAllFormFields(this.customForm);
    }

}