import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { AuthenticationService } from './authentication.service';
import { RoadService } from 'src/app/works/road.service';
import { Road } from 'src/app/works/road.model';

@Injectable()
export class DataStorageService {

    constructor(
        private http: HttpClient,
        private auth: AuthenticationService,
        private roadService: RoadService
    ) { }

    storeData() {
        const token = this.auth.getToken();
        return this.http.put('https://expro-angular.firebaseio.com/roads.json',
            this.roadService.getRoads(), {
                params: new HttpParams().set('auth', token)
            });
    }

    fetchData() {
        const token = this.auth.getToken();
        this.http.get('https://expro-angular.firebaseio.com/roads.json',
            {
                params: new HttpParams().set('auth', token)
            }).pipe(
                map(
                    (roads: Road[]) => {
                        return roads;
                    }
                )
            ).subscribe(
                (roads: Road[]) => {
                    this.roadService.setRoads(roads);
                }
            );
    }
}
