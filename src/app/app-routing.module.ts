import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'users',
        loadChildren: './users/users.module#UsersModule'
      },
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      }
    ])
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
