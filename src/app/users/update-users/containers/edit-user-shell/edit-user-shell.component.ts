import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import * as fromUser from '../../state';
import * as userActions from '../../state/actions';

import { Observable, Subscription } from 'rxjs';
import { User } from '../../../user';

@Component({
  selector: 'app-edit-user-shell',
  templateUrl: './edit-user-shell.component.html',
  styleUrls: ['./edit-user-shell.component.css']
})
export class EditUserShellComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<fromUser.State>) { }

  userSelected$: Observable<User>;
  errorMessage$: Observable<string>;
  userObserver$: Subscription;
  
  ngOnInit() {

    let id = this.route.snapshot.params['id'];
    const type = this.route.snapshot.params['type'];

    if( id != undefined && id != 0 ) {

      this.store.dispatch(new userActions.LoadUser(+id));
    } else if( id == 0 && type == 'add' ) {

      this.store.dispatch(new userActions.InitializeUser);
    } else {

      
    }

    this.userSelected$ = this.store.pipe(select(fromUser.getUser));
    this.errorMessage$ = this.store.pipe(select(fromUser.getError));
  }

  updateUser(user: User): void {

    this.store.dispatch(new userActions.UpdateUser(user));
  }

  addUser(user: User): void {

    this.store.dispatch(new userActions.AddUser(user));
    this.userObserver$ = this.store.pipe(select(fromUser.getUser))
                                    .subscribe(user => {
                                      if(user.id) {
                                        this.router.navigate(['/users']);
                                        this.store.dispatch(new userActions.resetUser);
                                        this.userObserver$.unsubscribe();
                                      }
                                    });
  }

  deleteUser(user: User): void {

    this.store.dispatch(new userActions.DeleteUser(user.id));
    this.userObserver$ = this.store.pipe(select(fromUser.getUser))
                                    .subscribe(user => {
                                      if(!user) {
                                        this.router.navigate(['/users']);
                                        this.userObserver$.unsubscribe();
                                      }
                                    });
  }

  resetUser(): void {

    this.store.dispatch(new userActions.resetUser);
    this.router.navigate(['/users']);
  }

}
