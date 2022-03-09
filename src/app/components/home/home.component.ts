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

  categorys: ICategorySearch[] = []
  products: IProduct[] = []
  filterProducts: IProduct[] = []
  orderP: IProduct[] = []
  PriceArr: number[] = []
  Price: number = 0
  show: boolean = false;
  inputValue: string = '';
  searchMoviesProducts: IProduct[] = []
  showMovies: boolean = false;
  hidden: boolean = false
  navigation: string = 'navigation'
  btn: string = 'btn'
  filter:string = 'filter'

  // firstDiv:string = 'firstDiv'
  // secondDiv:string = 'secondDiv'
  // thirdDiv:string = 'thirdDiv'
  divClass:string = 'classDiv'


  constructor(private service: GetdataService) {}

  ngOnInit(): void {
    this.service.getCategory()
    this.service.getData()
    this.service.$theData.subscribe((data) => (this.products = data))
    this.orderP = this.getFromLocalStorage('Order')
    this.PriceArr = this.getFromLocalStorage('PriceArr')
    this.Price = this.getFromLocalStorage('totalPrice')

    this.service.$categoryApi.subscribe((cat) => {
      this.categorys = cat
    })
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

  filterMovies(name:string) {
    this.filterProducts = []
    this.show = true;
    this.hidden = false
    this.showMovies = false;
    for (let c of this.categorys) {
      if (name === c.name) {
        for (let p of this.products) {
          for (let cateId of p.productCategory) {
            if (cateId.categoryId === c.id) {
              this.filterProducts.push(p)
          }
        }
      }
      }
    }
  }

  showAllProducts() {
    this.show = false;
    this.hidden = false
    this.showMovies = false;
  }

  search(inputVa: string) {
    this.inputValue = inputVa
  }

  searchMovis() {
    this.showMovies = true;
    this.hidden = true
    this.service.searchTermFromUser(this.inputValue)
    this.service.$searchMovies.subscribe((data) => {
      this.searchMoviesProducts = data
    })
  }

  getFromLocalStorage(name: string) {
    return JSON.parse(localStorage.getItem(name) || '[]')
  }
}
