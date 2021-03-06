import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication/services/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  onLogout() {
    this.authenticationService.destroyToken();
    this.router.navigate(['']);
  }

  toRoads() {
    if (!this.authenticationService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }

  toAccesses() {
    if (!this.authenticationService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }
}
