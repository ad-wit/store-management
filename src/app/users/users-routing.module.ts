import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        loadChildren: './view-users/view-users.module#ViewUsersModule',
        canLoad: []
      },
      {
        path:':id',
        loadChildren: './view-users/update-users.module#UpdateUsersModule',
        canLoad: []
      }
    ])
  ],
  declarations: []
})
export class UsersRoutingModule { }
