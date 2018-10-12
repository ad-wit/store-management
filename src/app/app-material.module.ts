import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule
  ],
  exports: [ MatTableModule, MatToolbarModule ],
  declarations: []
})
export class AppMaterialModule { }
