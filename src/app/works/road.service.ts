import { Road } from './road.model';
import { Subject } from 'rxjs';

export class RoadService {

    updatedRoads = new Subject<Road[]>();

    private roads: Road[] = [
        new Road(
            'mountain roads',
			'https://www.suncityparadise.com/wp-content/uploads/2018/01/five_scenic_southeast_asian_roads_vietnam.jpg',
			'see the sights'
        ),
        new Road(
            'desert roads',
			'https://goneroguetravel.files.wordpress.com/2018/02/road-trip.jpg?w=1000&h=500&crop=1',
			'western drive'
        ),
        new Road(
            'seaside roads',
			'https://news.experienceoz.com.au/wp-content/uploads/2017/02/noosa-main-beach.jpg',
			'take a bath while you\'re at it'
        )
    ];

    constructor() { }

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

    deleteRoad(index: number) {
        this.roads.splice(index, 1);
        this.updatedRoads.next(this.roads.slice());
    }
}
