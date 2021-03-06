import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable()
export class AuthenticationService {

    token: string;

    constructor(
        private router: Router
    ) { }


    onSignUpUser(
        email: string,
        password: string
    ) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(
                response => this.router.navigate(['/login'])
            )
            .catch(
                error => console.log(error)
            );
    }

    onSignInUser(
        email: string,
        password: string
    ) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token: string) => this.token = token
                        );
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => this.token = token
            );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    destroyToken() {
        firebase.auth().signOut();
        this.token = null;
    }
}
