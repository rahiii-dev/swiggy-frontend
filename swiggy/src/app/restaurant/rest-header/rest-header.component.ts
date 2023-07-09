import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-rest-header',
  templateUrl: './rest-header.component.html',
  styleUrls: ['./rest-header.component.css']
})
export class RestHeaderComponent implements OnInit {

  OrderCount: any = 0;

  constructor(private order$: OrderService){}

  ngOnInit(): void {
    setInterval(() => {
      this.order$.getCount().subscribe(
        data => {
          this.OrderCount = data
        })

    }, 1000)
  }
}
