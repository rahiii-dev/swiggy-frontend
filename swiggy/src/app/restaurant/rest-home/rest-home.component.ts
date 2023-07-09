import { Component, OnInit, ViewChild } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { RestaurantInterface } from 'src/app/shared/interfaces/restaurant'
import { Observable} from 'rxjs';
import { RestCuisineFormComponent } from '../rest-cuisine-form/rest-cuisine-form.component'; 
import { OrderService } from 'src/app/shared/services/order.service';


@Component({
  selector: 'app-rest-home',
  templateUrl: './rest-home.component.html',
  styleUrls: ['./rest-home.component.css']
})
export class RestHomeComponent implements OnInit {
  isLoading: boolean = true;
  registered: boolean = true;
  Rest!: RestaurantInterface;
  restaurant!: Observable<RestaurantInterface>;
  cuisineVeg : boolean = false;

  openmodel : boolean = false;

  constructor(private rest$ : RestaurantService,
    private order$: OrderService){}

  ngOnInit(): void {
    this.rest$.getRest().subscribe(data => {
      if(!data){
        this.registered = false
      }
      this.restaurant = this.rest$.getRest()
      this.isLoading = false
    })
  }

  @ViewChild('CuisineForm', { static: false }) CuisineForm!: RestCuisineFormComponent;

  cuisineAdded(event:any) {
    if(event == true){
      this.isLoading = true
      this.rest$.getRest().subscribe(data => this.isLoading = false)
      this.restaurant = this.rest$.getRest()
    }
  }

  UpdateCuisine(id: any) {
    this.rest$.getCuisine(id).subscribe(
      data => {
        this.CuisineForm.updateForm(data)
        this.openmodel=true
      }
    )
  }

  cuisineUpdated(event: any){
    this.isLoading = true
    this.rest$.getRest().subscribe(data => this.isLoading = false)
    this.restaurant = this.rest$.getRest()
    this.openmodel = false
  }

  deleteCuisine(e: any, id: any){
    e.stopPropagation()
    this.rest$.deleteCuisine(id).subscribe(
      data => {
        this.isLoading = true
        this.rest$.getRest().subscribe(data => this.isLoading = false)
        this.restaurant = this.rest$.getRest()
      }
    )
  }

  CloseModel(event: any) {
    this.openmodel = event
  }

  filterVeg() {
    this.cuisineVeg = !this.cuisineVeg
  }

}
