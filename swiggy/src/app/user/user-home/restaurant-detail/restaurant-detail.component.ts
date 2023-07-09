import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { Observable } from 'rxjs';
import { RestaurantInterface } from 'src/app/shared/interfaces/restaurant';
import { Cuisines } from 'src/app/shared/interfaces/cuisines';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent {
  Rest!: Observable<RestaurantInterface>;
  Cusines!: Observable<Cuisines>;

  isLoading: boolean = true;
  CuisineLoading: boolean = true;

  constructor(private route: ActivatedRoute,
    private rest$: RestaurantService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const slug = params['slug'];

      this.Rest = this.rest$.getRestDetail(slug)
      this.Cusines = this.rest$.getCuisine(slug)

    });
  }
}
