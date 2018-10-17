import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatToolbarModule, MatIconModule, MatDialogModule, MatButtonModule, MatInputModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [ MatTableModule, MatToolbarModule, MatIconModule, MatButtonModule, MatDialogModule, MatInputModule, MatCardModule ],
  declarations: []
})
export class AppMaterialModule { }
