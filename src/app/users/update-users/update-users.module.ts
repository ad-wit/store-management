import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './state/reducer';
import { Effects } from './state/effects';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditUserShellComponent } from './containers/edit-user-shell/edit-user-shell.component';

import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


const editUserRoutes: Routes = [
  {
    path: '',
    redirectTo: ':type',
    pathMatch: 'full'
  },
  {
    path: ':type',
    component: EditUserShellComponent,
    canLoad: []
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild(editUserRoutes),
    StoreModule.forFeature('selectedUser', reducer),
    EffectsModule.forFeature([
      Effects
    ])
  ],
  declarations: [EditUserComponent, EditUserShellComponent]
})
export class UpdateUsersModule { }
