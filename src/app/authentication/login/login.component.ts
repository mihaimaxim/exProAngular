import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  onSignIn(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authenticationService.onSignInUser(email, password)
  }
}
