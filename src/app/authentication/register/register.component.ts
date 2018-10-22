import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  onSignUp(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authenticationService.onSignUpUser(email, password)
  }
}
