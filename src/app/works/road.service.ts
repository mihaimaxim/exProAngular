import { Road } from './road.model';
import { Subject } from 'rxjs';

export class RoadService {
  updatedRoads = new Subject<Road[]>();

  private roads: Road[] = [
    // new Road(
    //   'country roads',
    //   'https://jooinn.com/images/country-road-25.jpg',
    //   'see the sights'
    // ),
    // new Road(
    //   'desert roads',
    //   'https://goneroguetravel.files.wordpress.com/2018/02/road-trip.jpg?w=1000&h=500&crop=1',
    //   'western drive'
    // ),
    // new Road(
    //   'seaside roads',
    //   'http://www.panorama-destination.com/wp-content/uploads/2018/09/bang-tao-beach.jpg',
    //   'no road here, but who needs any?'
    // ),
  ];

  constructor() {}

  setRoads(roads: Road[]) {
    this.roads = roads;
    this.updatedRoads.next(this.roads.slice());
  }

  getRoad(index: number) {
    return this.roads[index];
  }

  getRoads() {
    return this.roads.slice();
  }

  // deleteRoad(index: number) {
  //     this.roads.splice(index, 1);
  //     this.updatedRoads.next(this.roads.slice());
  // }

  deleteRoads() {
    this.roads.splice(0, this.roads.length);
    this.updatedRoads.next(this.roads.slice());
  }
}
