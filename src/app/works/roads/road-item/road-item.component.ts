import { Component, Input } from '@angular/core';

import { Road } from '../../road.model';

@Component({
  selector: 'app-road-item',
  templateUrl: './road-item.component.html',
  styleUrls: ['./road-item.component.css']
})
export class RoadItemComponent {

  @Input() road: Road;
  @Input() index: number;
}
