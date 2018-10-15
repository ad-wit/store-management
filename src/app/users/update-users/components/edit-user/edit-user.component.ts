import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../user';
import { GenericValidator } from '../../../../generic-validators';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditUserComponent implements OnInit, OnChanges {

  @Input() user: User | null;
  @Output() create = new EventEmitter<User>();
  @Output() update = new EventEmitter<User>();
  @Output() delete = new EventEmitter<User>();
  @Output() cancel = new EventEmitter<void>();

  pageTitle: string;
  userEditForm: FormGroup;
  formErrorMessages: { [key: string]: string };
  
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;


  constructor(private fb: FormBuilder) {

    this.validationMessages = {
      name: {
        required: 'Please provide name of the user.'
      },
      email: {
        required: 'Please provide email of the user.',
        email: 'Please provide a valid email.'
      },
      phone: {
        required: 'Please provide phone number of the user.'
      },
      address: {
        required: 'Please provide address of the user.'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {

    this.userEditForm.valueChanges.subscribe(() => this.formErrorMessages = this.genericValidator.processMessages(this.userEditForm));
  }

  ngOnChanges(changes: SimpleChanges) {

    let user: User = changes.user.currentValue;

    this.user = user;

    this.userEditForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      address: ['', [Validators.required]]
    });

    if(user) {
      if (this.user.id === 0) {
        this.pageTitle = 'Add User';
      } else {
        this.pageTitle = `Edit User: ${this.user.name}`;
      }
    }

    this.updateForm(user);
  }

  updateForm(user: User): void {

    if(user) {

      this.userEditForm.reset();
  
      this.userEditForm.patchValue({
        name: this.user.name,
        email: this.user.email,
        phone: this.user.phone,
        address: this.user.address
      });
    }
  }

  saveUser(): void {
    if (this.userEditForm.valid) {
      if (this.userEditForm.dirty) {

        const user = { ...this.user, ...this.userEditForm.value };

        if (user.id === 0) {
          this.create.emit(user);
        } else {
          this.update.emit(user);
        }
      }
    }
  }

  deleteUser(): void {

    if(this.user && this.user.id) {
      if(confirm(`Do you really want to delete ${this.user.name}?`)) {
        this.delete.emit(this.user);
      }
    }
  }

  cancelEdit(): void {

    this.cancel.emit();
    this.userEditForm.reset();
  }

}
