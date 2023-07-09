import { Component, OnInit} from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit{

  constructor(public rest$: RestaurantService) {}

  ngOnInit(): void {  
  }

}
