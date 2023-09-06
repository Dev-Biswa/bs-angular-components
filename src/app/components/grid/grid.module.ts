import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridComponent } from './grid.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

const MaterialModule = [
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [GridComponent],
  exports: [GridComponent]
})
export class GridModule {}