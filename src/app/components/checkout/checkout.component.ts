import { Component, OnInit } from '@angular/core'
import { IProduct } from 'src/app/models/IProduct'
import { Order } from 'src/app/models/Order'
import { OrderRows } from 'src/app/models/OrderRows'
import { User } from 'src/app/models/User'
import { GetdataService } from 'src/app/services/getdata.service'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  finishedOrder: Order[] = []
  products: IProduct[] = []
  user: User = new User('', '', '', '', '', '', '', '','')

  constructor(private service:GetdataService) {}

  ngOnInit(): void {

    this.service.getOrderApi()
    this.service.$orderApiData.subscribe((data)=>this.finishedOrder = data)

    this.user = JSON.parse(localStorage.getItem('myOrdercompanyUser') || '[]')

    this.service.getData()
    this.service.$theData.subscribe((data)=>this.products=data)
  }
}
