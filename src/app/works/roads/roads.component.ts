import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-roads',
  templateUrl: './roads.component.html',
  styleUrls: ['./roads.component.css']
})
export class RoadsComponent implements OnInit {

  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  toLogin() {
    this.router.navigate(['/login'])
  }

}
