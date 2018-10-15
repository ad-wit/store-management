import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './state/reducer';
import { Effects } from './state/effects';

import { MatTableModule, MatDialogModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersInfoComponent } from './components/users-info/users-info.component';
import { ViewUsersShellComponent } from './containers/view-users-shell/view-users-shell.component';

const userViewRoutes: Routes = [
  {
    path: '',
    component: ViewUsersShellComponent,
    canLoad: []
  }
];

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule.forChild(userViewRoutes),
    StoreModule.forFeature('usersList', reducer),
    EffectsModule.forFeature([
      Effects
    ])
  ],
  declarations: [UsersListComponent, UsersInfoComponent, ViewUsersShellComponent],
  entryComponents: [UsersInfoComponent]
})
export class ViewUsersModule { }
