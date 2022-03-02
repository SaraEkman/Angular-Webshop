import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { IProduct } from 'src/app/models/IProduct'
import { GetdataService } from 'src/app/services/getdata.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: IProduct[] = []
  orderP: IProduct[] = []
  amount: number = 0

  constructor(private service: GetdataService) {}

  ngOnInit(): void {
    this.service.getData()
    // this.service.theData$.subscribe((data)=> this.products = data)
    if (localStorage.getItem('Products')) {
      this.products = this.getFromLocalStorage('Products');
    }

    if (localStorage.getItem('Order')) {
      this.orderP = this.getFromLocalStorage('Order')
    }

    if (localStorage.getItem('totalPNums')) {
      this.amount = this.getFromLocalStorage('totalPNums')
    }
  }

  saveProduct(p: IProduct) {
    this.orderP.push(p)
    console.log(this.orderP)
    localStorage.setItem('Order', JSON.stringify(this.orderP))
    this.amount += +1
    console.log(this.amount)
    localStorage.setItem('totalPNums', JSON.stringify(this.amount))
  }

  getFromLocalStorage(name: string) {
    return JSON.parse(localStorage.getItem(name) || '[]')
  }
}
