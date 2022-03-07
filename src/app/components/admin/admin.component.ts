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

finishedOrder: Order[] = []
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

    if (localStorage.getItem('Products')) {
      this.products = JSON.parse(localStorage.getItem('Products') || '[]')
    }

     this.finishedOrder = JSON.parse(localStorage.getItem('finishedOrderU') || '[]')


    this.getOrderService.getOrderApi()

    this.getOrderService.$orderApiData.subscribe((data) => {
      this.myOrdercompanyOrders = data
    })


  }

  // main() {
  //   for (let p of this.products) {
  //       this.product = p
  //     }

  //   for (let el of this.myCompanyOrder) {
  //     this.companyOrder = el

  //   }

  // }

  removeOrder(id: number, i: number) {
    this.finishedOrder.splice(i,1)
    localStorage.setItem('finishedOrderU',JSON.stringify(this.finishedOrder))
    this.getOrderService.deleteOrder(id);
  }
}
