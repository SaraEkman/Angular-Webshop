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
  // companyOrder: Order = new Order(new User('', '', '', '', '', '', '', ''),0,[])

  products: IProduct[] = []
  // product: IProduct = {
  //   id: 0,
  //   name: '',
  //   description: '',
  //   price: 0,
  //   imageUrl: '',
  //   year: 0,
  //   added: '',
  //   productCategory: [],
  // }

  // finishedOrder: Order = new Order(new User('', '', '', '', '', '', '', ''),0,[])

  // userArray :User[] = []



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
