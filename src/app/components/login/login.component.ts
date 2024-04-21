import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from "src/app/services/authentication.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  submitted = false;
  user$: Observable<boolean>;
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
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
      this.loginForm.controls['password'].value)

  }
}
