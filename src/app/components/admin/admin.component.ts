import { Component, OnInit } from '@angular/core'
import { IProduct } from 'src/app/models/IProduct'
import { Order } from 'src/app/models/Order'
import { GetdataService } from 'src/app/services/getdata.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  myOrdercompanyOrders: Order[] = []
  products: IProduct[] = []
  adminOrderWrapper: string = "adminOrderWrapper"

  constructor(private getOrderService: GetdataService) {}

  ngOnInit(): void {

    this.getOrderService.getData()
    this.getOrderService.$theData.subscribe((data)=>this.products=data)



    this.getOrderService.getOrderApi()

    this.getOrderService.$orderApiData.subscribe((data) => {
      this.myOrdercompanyOrders = data
    })
  }

  removeOrder(id: number) {
    this.getOrderService.deleteOrder(id);
  }
}
