import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/authentication/services/authentication.service';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent {

  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) {}

  toLogin() {
    this.router.navigate(['/login']);
  }
}
