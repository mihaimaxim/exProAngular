import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
import { RoadService } from "../RoadService";
import { Road } from '../road.model';

@Component({
  selector: 'app-roads',
  templateUrl: './roads.component.html',
  styleUrls: ['./roads.component.css']
})
export class RoadsComponent implements OnInit, OnDestroy {

  roads: Road[];
  subscription: Subscription;

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private roadService: RoadService
  ) { }

  ngOnInit() {
    this.subscription = this.roadService.updatedRoads.subscribe(
      (roads: Road[]) => {
        this.roads = roads;
      }
    );
    this.roads = this.roadService.getRoads();
  }

  toLogin() {
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
