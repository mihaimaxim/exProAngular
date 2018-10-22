import { Component } from '@angular/core';

import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  onLogout() {
    this.authenticationService.destroyToken()
  }
}
