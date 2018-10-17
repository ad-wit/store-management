import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UpdateUsersGuard } from './update-users-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        loadChildren: './view-users/view-users.module#ViewUsersModule',
      },
      {
        path:':id',
        loadChildren: './update-users/update-users.module#UpdateUsersModule',
        canLoad: [ UpdateUsersGuard ],
        canActivate: [ UpdateUsersGuard ]
      },
      {
        path: '**',
        redirectTo: ''
      }
    ])
  ],
  declarations: [],
  providers: [ UpdateUsersGuard ]
})
export class UsersRoutingModule { }
