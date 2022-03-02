import { Component, OnInit } from '@angular/core'
import { IProduct } from 'src/app/models/IProduct'

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss'],
})
export class ShoppingcartComponent implements OnInit {
  products: IProduct[] = []
  amountNu: number = 1
  Price: number = 0
  totalPNums: number = 0

  constructor() {}

  ngOnInit(): void {
    this.products = JSON.parse(localStorage.getItem('Order') || '[]')
    this.totalPNums = JSON.parse(localStorage.getItem('totalPNums') || '[]')
  }


  // det funkar inte :( som det ska här ifrån
  plus(price: number, inputNum: number) {
    if (this.amountNu > 0) {
      if (inputNum > 0) {
        this.amountNu += inputNum
      } else {
        this.amountNu += 1
      }
      price = price * this.amountNu
      this.Price = price
      console.log(price)
    }
  }

  minus(price: number, inputNum: number) {
    if (this.amountNu > 0) {
      this.amountNu -= inputNum
    } else {
      this.amountNu += +(-1);
    }
    this.Price -= price;
    console.log(this.Price)
  }

  // tills hit

  removeP(i: number) {
    this.products.splice(i, 1)
    localStorage.setItem('Order', JSON.stringify(this.products));
    this.totalPNums += +(-1);
    localStorage.setItem('totalPNums', JSON.stringify(this.totalPNums))
  }
}
