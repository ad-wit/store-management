import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { LoginComponent } from './login/login.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './state/reducer';

import { LoginGuard } from './login-guard.service';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from 'src/app/admin/state/effects';

const userRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [ LoginGuard ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('admin', reducer),
    EffectsModule.forFeature([
      Effects
    ])
  ],
  declarations: [
    LoginComponent
  ],
  providers: [ LoginGuard ]
})
export class AdminModule { }
