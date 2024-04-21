import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from "src/app/services/authentication.service";
import { Observable } from 'rxjs';
import { User } from "src/app/models/user.model";
import { Router } from "@angular/router";
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  submitted = false;
  user$: Observable<User[]>;
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private route: Router
  ) {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.submitted = false;
      return;
    }
    this.user$ = this.authenticationService.login(this.loginForm.controls['userName'].value,
      this.loginForm.controls['password'].value).pipe(tap(user => {
        if (user && user.length > 0) {
          this.route.navigate(['']);
        }
      }))
  }
}
