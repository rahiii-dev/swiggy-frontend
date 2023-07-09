import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';
import { Observable } from 'rxjs';
import { Orders } from '../interfaces/orders';

@Component({
  selector: 'app-rest-orders',
  templateUrl: './rest-orders.component.html',
  styleUrls: ['./rest-orders.component.css']
})
export class RestOrdersComponent implements OnInit {

  Myorders!: Observable<Orders>;
  loading: boolean = true;

  constructor(private order$: OrderService){}

  ngOnInit(): void {
    this.Myorders = this.order$.getRestOrders()
    this.order$.getRestOrders().subscribe(data => this.loading= false);
  }

  acceptOrder(orderId: any){
    this.order$.acceptOrder(orderId).subscribe(
      data => {
        this.loading = true
        this.Myorders = this.order$.getRestOrders()
        this.order$.getRestOrders().subscribe(data => {this.loading= false});
      }
    )
  }

}
