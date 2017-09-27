import { Component, OnInit } from '@angular/core';

import { Restaurant } from 'app/restaurants/restaurant/restaurant.models';
import { RestaurantsService } from 'app/restaurants/restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];
  
  constructor(private _restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this._restaurantsService.restaurants().subscribe(
      restaurants => this.restaurants = restaurants
    )
  }

}
