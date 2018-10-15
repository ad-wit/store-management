import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../auth.service';

import { takeWhile, filter, take } from 'rxjs/operators';

import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../state/app.state';
import * as adminActions from '../state/actions';
import * as fromAdmin from '../state/';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pageTitle: string = 'Log In';
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService) {}

  ngOnInit(): void {
    
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      if (this.loginForm.dirty) {
        this.authService.login(this.loginForm.value.username, this.loginForm.value.password);
      }
    }
  }
}
