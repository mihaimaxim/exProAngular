import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
import { PreviousRouteService } from '../previousURL.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private previousURL: PreviousRouteService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.previousURL.getPreviousURL())
  }

  onSignIn(form: NgForm) {
    const email = form.value.userData.email;
    const password = form.value.userData.password;
    this.authenticationService.onSignInUser(email, password)
    if (this.previousURL.getPreviousURL() === '/roads') {
      this.router.navigate(['/roads'])
    } else if (this.previousURL.getPreviousURL() === '/access') {
      this.router.navigate(['/access'])
    } else {
      this.router.navigate([''])
    }
  }
}
