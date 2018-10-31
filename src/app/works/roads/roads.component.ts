import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Response } from '@angular/http';

import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
import { RoadService } from '../road.service';
import { DataStorageService } from 'src/app/authentication/services/data-storage.service';
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
    private roadService: RoadService,
    private dataStorage: DataStorageService
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

  fetchRoads() {
    this.dataStorage.fetchData();
  }

  saveRoads() {
    this.dataStorage.storeData().subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
