import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DelOrders } from 'src/app/delivery/interfaces/del-orders';
import { Orders } from 'src/app/restaurant/interfaces/orders';
import { Myorders } from 'src/app/user/interfaces/myorders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  placeOrder(data: any){
    return this.http.post('/api/order/', data)
  }

  getOrder(){
    return this.http.get<Myorders>('/api/order/')
  }

  getRestOrders(){
    return this.http.get<Orders>('/api/order/')
  }

  getDelOrders(){
    return this.http.get<DelOrders>('/api/order/')
  }

  acceptOrder(orderID: any){
    const formdata = new FormData()
    formdata.append('orderID', orderID)
    return this.http.put('/api/order/?status=accept', formdata)
  }

  getCount(){
    return this.http.get('/api/order/?filter=count')
  }

}
