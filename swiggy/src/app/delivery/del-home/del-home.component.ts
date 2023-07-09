import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/shared/services/order.service';
import { DelOrders } from '../interfaces/del-orders';

@Component({
  selector: 'app-del-home',
  templateUrl: './del-home.component.html',
  styleUrls: ['./del-home.component.css']
})
export class DelHomeComponent implements OnInit{
  Myorders!: Observable<DelOrders>;
  loading: boolean = true;

  constructor(private order$: OrderService){}

  ngOnInit(): void {
    this.Myorders = this.order$.getRestOrders()
    this.order$.getDelOrders().subscribe(data => this.loading= false);
  }

  acceptOrder(orderId: any){
    this.order$.acceptOrder(orderId).subscribe(
      data => {
        this.loading = true
        this.Myorders = this.order$.getRestOrders()
        this.order$.getRestOrders().subscribe(data => {this.loading= false});
      }
    );
  }
}
