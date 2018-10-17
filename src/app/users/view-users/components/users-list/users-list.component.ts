import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  constructor() { }

  @Input() users: User[];
  @Output() selected = new EventEmitter<User>();
  @Input() adminRole: string;

  displayedColumns: string[] = ['position', 'name', 'email', 'phone', 'button'];

  userSelected(user: User): void {

    this.selected.emit(user);
  }

}
