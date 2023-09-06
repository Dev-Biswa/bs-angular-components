import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomComponent } from "./custom.component";
import { CustomFormComponent } from "./custom-form/custom-form.component";
import { CustomGridComponent } from "./custom-grid/custom-grid.component";

const routes: Routes = [
    {   path: '', 
        component: CustomComponent,
        children: [
            { path: 'form', component: CustomFormComponent },
            { path: 'grid', component: CustomGridComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CustomRoutingModule {}