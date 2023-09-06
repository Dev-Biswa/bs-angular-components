import { NgModule } from "@angular/core";
import * as component from './index';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ErrorMessageModule } from "../error-message/error-message.module";

const MaterialModule = [
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
];

const FORM_COMPONENTS = [
    component.FormInputComponent,
    component.FormDropdownComponent
];

@NgModule({
    declarations: [
        ...FORM_COMPONENTS
    ],
    imports: [
        MaterialModule,
        CommonModule,
        FormsModule,
        ErrorMessageModule
    ],
    exports: [...FORM_COMPONENTS]
})

export class FormComponentsModule {}