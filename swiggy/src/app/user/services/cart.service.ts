import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from 'src/app/accounts/services/authentication.service';
import { ItemCart } from '../interfaces/item-cart';
import { BehaviorSubject } from 'rxjs';
import { UserCart } from '../interfaces/user-cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private ItemsCount = new BehaviorSubject<any>(0)
  itemsCount$ = this.ItemsCount.asObservable();


  constructor(private http: HttpClient,
    private auth$: AuthenticationService) { }

  getUserCart(){
    if(this.auth$.isGuestUser()){
      return this.http.get<UserCart>(`/api/cart?guestId=${this.auth$.getGuestId()}`)
    }

    return this.http.get<UserCart>(`/api/cart/`)
  }

  addToCart(cusineid: any, restId: any){
    const formdata = new FormData()
    formdata.append('restaurant', restId)
    formdata.append('cuisine', cusineid)
    if(this.auth$.isGuestUser()){
      formdata.append('userid', this.auth$.getGuestId())
    }

    return this.http.post('/api/cart/', formdata)
  }

  getCusineCartDetail(cusineID: any){
    if(this.auth$.isGuestUser()){
      return this.http.get<ItemCart>(`/api/cart/cusine/${cusineID}?guestId=${this.auth$.getGuestId()}`)
    }
    return this.http.get<ItemCart>(`/api/cart/cusine/${cusineID}`)
  }

  changeQuantity(type:string, id: any){
    const formdata = new FormData()
    formdata.append('type', type)
    formdata.append('itemId', id)

    return this.http.put('/api/cart/', formdata)
  }

  getCartCount(){
    if(this.auth$.isGuestUser()){
      this.http.get(`/api/cart/count?guestId=${this.auth$.getGuestId()}`).subscribe(
        data => {
          this.ItemsCount.next(data)
        }
      )
    }
    else{
      this.http.get(`/api/cart/count/`).subscribe(
        data => {
          this.ItemsCount.next(data)
        }
      )
    }

  }

  changeGuestCart(cartID: any){
    const formdata = new FormData()
    formdata.append('cartID', cartID)

    return this.http.post(`/api/cart/change/`, formdata)
  }
}
