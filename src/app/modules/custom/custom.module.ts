import { NgModule } from "@angular/core";
import { CustomComponent } from "./custom.component";
import { CustomRoutingModule } from "./custom-routing.module";
import { CustomGridComponent } from "./custom-grid/custom-grid.component";
import { CustomFormComponent } from "./custom-form/custom-form.component";
import { FormComponentsModule } from "src/app/components/form-components/form-components.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { GridModule } from "src/app/components/grid/grid.module";

@NgModule({
    declarations: [
        CustomComponent,
        CustomGridComponent,
        CustomFormComponent
    ],
    imports: [
        CustomRoutingModule,
        FormComponentsModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        GridModule
    ],
    providers: [],
})
export class CustomModule { }