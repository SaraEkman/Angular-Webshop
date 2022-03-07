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
  user: User = new User('', '', '', '', '', '', '', '')

  // orderRows: OrderRows[] = []

  // OrderProducts: IProduct[] =[]

  // product: IProduct = {
  //   id: 0,
  // name: '',
  // description: '',
  // price: 0,
  // imageUrl: '',
  // year: 0,
  // added: '',
  // productCategory: [],
  // }
  // function = this.main()


  constructor() {}

  ngOnInit(): void {
    this.finishedOrder = JSON.parse(localStorage.getItem('finishedOrderU') || '[]')
    this.user = JSON.parse(localStorage.getItem('myOrdercompanyUser') || '[]')

    this.products = JSON.parse(localStorage.getItem('Products') || '[]')
  }

  // main() {
  //   for (let order of this.finishedOrder) {
  //     for (let row of order.orderRows) {
  //       // this.orderRows.push(row)
  //       for (let p of this.products) {
  //         if (p.id === row.id) this.OrderProducts.push(p)
  //     }
  //   }
  // }
// }



}
