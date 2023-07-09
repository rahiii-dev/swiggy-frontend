import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-btn',
  templateUrl: './cart-btn.component.html',
  styleUrls: ['./cart-btn.component.css']
})
export class CartBtnComponent implements OnInit{
  @Input()cusineId: any;
  @Input()restId: any;

  isIncart: boolean= false;
  modelClosed: boolean= false;
  error!: string;

  itemID: any;
  itemQuantity!: number;

  loading: boolean= true;

  private UpdateButton(){
    this.cart$.getCusineCartDetail(this.cusineId).subscribe(
      data => {
        if(data){
          this.itemID = data.id
          this.itemQuantity = data.quantity
          this.isIncart = true
        }
        else if(!data){
          this.isIncart = false
        }

        this.cart$.getCartCount()
        this.loading = false;
      }
    )
  }

  constructor(private cart$: CartService){}

  ngOnInit() {
    this.UpdateButton()
  }

  addTocart(){
    this.loading = true
    
    this.cart$.addToCart(this.cusineId, this.restId).subscribe({
      next: data=>{
        this.UpdateButton()
      },
      error: err => {
        this.error = err.message
        this.modelClosed = true
        this.loading = false
      }
    })
  }

  changeQuantity(type:string){
    this.loading = true

    this.cart$.changeQuantity(type, this.itemID).subscribe(
      data => {
        this.UpdateButton()
      }
    )
  }

  close(event: any) {
    this.modelClosed = event
  }

}
