import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { ICategorySearch } from 'src/app/models/ICategorySearch'
import { IProduct } from 'src/app/models/IProduct'
import { GetdataService } from 'src/app/services/getdata.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  category: ICategorySearch[] = []
  products: IProduct[] = []
  orderP: IProduct[] = []
  PriceArr: number[] = []
  Price: number = 0



  constructor(private service: GetdataService) {}

  ngOnInit(): void {
    this.service.getData()
    this.service.getCategory()

    if (localStorage.getItem('Products')) {
      this.products = this.getFromLocalStorage('Products')
    } else {
      this.service.$theData.subscribe((data) => (this.products = data))
    }
    this.orderP = this.getFromLocalStorage('Order')

    this.PriceArr = this.getFromLocalStorage('PriceArr')
    this.Price = this.getFromLocalStorage('totalPrice')

  }

  saveProduct(p: IProduct) {
    this.orderP.push(p)
    localStorage.setItem('Order', JSON.stringify(this.orderP))

    this.service.amountInShopingsCArt(this.orderP.length)

    this.PriceArr.push(p.price)
    this.Price = JSON.parse(localStorage.getItem('totalPrice') || '[]')
    this.Price = this.PriceArr.reduce((a, b) => a + b)
    localStorage.setItem('PriceArr', JSON.stringify(this.PriceArr))
    localStorage.setItem('totalPrice', JSON.stringify(this.Price))
    console.log(this.Price)
  }

  searchMovis() {
    
  }

  getFromLocalStorage(name: string) {
    return JSON.parse(localStorage.getItem(name) || '[]')
  }
}
