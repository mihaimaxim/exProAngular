import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { AuthenticationService } from '../services/authentication.service';
import { PreviousRouteService } from '../services/previousURL.service';

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
    console.log(this.previousURL.getPreviousURL());
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          console.log('user is signed in');
        } else {
          console.log('no user here');
        }
      }
    );
  }

  onSignIn(form: NgForm) {
    const email = form.value.userData.email;
    const password = form.value.userData.password;
    this.authenticationService.onSignInUser(email, password);
    if (this.previousURL.getPreviousURL() === '/roads') {
      this.router.navigate(['/roads']);
    } else if (this.previousURL.getPreviousURL() === '/access') {
      this.router.navigate(['/access']);
    } else {
      this.router.navigate(['']);
    }
  }
}
