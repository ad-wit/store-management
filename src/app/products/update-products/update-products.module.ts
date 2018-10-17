import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../../app-material.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { Effects } from './state/effects';
import { reducer } from './state/reducer';
import { UpdateProductShellComponent } from './container/update-product-shell/update-product-shell.component';

const editProductRoutes: Routes = [
  {
    path: '',
    component: UpdateProductShellComponent,
    canLoad: []
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    RouterModule.forChild(editProductRoutes),
    StoreModule.forFeature('selectedProduct', reducer),
    EffectsModule.forFeature([
      Effects
    ])
  ],
  declarations: [UpdateProductShellComponent]
})
export class UpdateProductsModule { }
