import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersGuard } from './guards/users-guard.service';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'users',
        loadChildren: './users/users.module#UsersModule',
        canLoad: [ UsersGuard ],
        canActivate: [ UsersGuard ]
      },
      {
        path: 'products',
        loadChildren: './products/products.module#ProductsModule',
        canLoad: [  ],
        canActivate: [  ]
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ])
  ],
  exports: [ RouterModule ],
  providers: [ UsersGuard ],
  declarations: []
})
export class AppRoutingModule { }
