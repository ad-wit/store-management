import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';

import { Store, select } from '@ngrx/store';
import * as fromUsersList from '../../state';
import * as usersListActions from "../../state/actions";

import { User } from '../../../user';
import { UsersInfoComponent } from '../../components/users-info/users-info.component';
import { AuthService } from '../../../../admin/auth.service';

@Component({
  selector: 'app-view-users-shell',
  templateUrl: './view-users-shell.component.html',
  styleUrls: ['./view-users-shell.component.css']
})
export class ViewUsersShellComponent implements OnInit {

  users$: Observable<User[]>;
  errorMessage$: Observable<string>;
  selectedUser: User = null;
  adminRole: string = null;

  constructor(private store: Store<fromUsersList.State>,
              private authService: AuthService,
              public dialog: MatDialog) { }

  ngOnInit() {

    this.store.dispatch(new usersListActions.LoadUsers);
    this.users$ = this.store.pipe(select(fromUsersList.getUsers));
    this.errorMessage$ = this.store.pipe(select(fromUsersList.getError));
    this.adminRole = this.authService.getAdminRole();
  }

  userSelected(user: User): void {

    this.selectedUser = user;
    let dialogRef = this.dialog.open(UsersInfoComponent, {
      height: '400px',
      width: '600px',
      data: this.selectedUser
    });
  }
}
