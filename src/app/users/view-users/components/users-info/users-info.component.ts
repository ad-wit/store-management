import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { User } from '../../../user';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.css']
})
export class UsersInfoComponent {

  constructor(public dialogRef: MatDialogRef<UsersInfoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User) { }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

}
