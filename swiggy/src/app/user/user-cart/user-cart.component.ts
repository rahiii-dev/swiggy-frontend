import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Observable } from 'rxjs';
import { UserCart } from '../interfaces/user-cart';
import { ZoneService } from '../services/zone.service';
import { AuthenticationService } from 'src/app/accounts/services/authentication.service';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {

  UserCart!: Observable<UserCart>;
  loading: boolean=true

  Userplace!: string;
  Userlat!: number;
  Userlng!: number;

  loogedIn: boolean = false;
  ordered: boolean = false;

  authType: string = 'login'
  modelOpened: boolean = false

  cartID: any;


  constructor(private cart$: CartService,
    private zone$: ZoneService,
    private auth$: AuthenticationService,
    private order$: OrderService) {
  }

  ngOnInit(): void {
    this.loogedIn = this.auth$.isLoggedIn()

    this.UserCart = this.cart$.getUserCart()
    this.cart$.getUserCart().subscribe(data =>{ 
      if(data.id){
        this.cartID = data.id
      }
      this.loading=false
    });

    this.zone$.getPlace()
    this.zone$.getCoordinates()
    this.zone$.userPlace$.subscribe( data=> this.Userplace = data)
    this.zone$.userCoord$.subscribe(data=> {
      this.Userlat = data.latitude
      this.Userlng = data.longitude
    })
  }
  
  getCoordinates(coords: any){
    this.Userlat = coords.lat
    this.Userlng = coords.lng
  }

  getPlace(place: string){
    this.Userplace = place
    this.zone$.setZone(this.Userlat, this.Userlng, this.Userplace)
  }

  placerOrder(cartId: any){
    const formdata = new FormData()
    formdata.append('cartID', cartId)
    formdata.append('latitude', `${this.Userlat}`)
    formdata.append('longitude', `${this.Userlng}`)

    this.order$.placeOrder(formdata).subscribe({
      next: data=>{
        this.ordered = true
        this.cart$.getCartCount()
      },
      error: err => {
        console.log(err)
      }
    });

  }

  LoggedIn(event:any){
    if(event == true){
      this.cart$.changeGuestCart(this.cartID).subscribe(
        data => {
          this.modelOpened = false
          this.loogedIn = true
        }
      )
    }
  }

  UserCreated(event:any){
    if(event == true){
      this.authType = 'signUp'
    }
  }

}
