import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { ICategorySearch } from '../models/ICategorySearch'
import { IProduct } from '../models/IProduct'
import { Order } from '../models/Order'


@Injectable({
  providedIn: 'root',
})
export class GetdataService {
  private categoryApi = new Subject<ICategorySearch[]>()
  $categoryApi = this.categoryApi.asObservable()

  private products = new Subject<IProduct[]>()
  $theData = this.products.asObservable()
  totalProductsNu: number = 0

  private orderApiData = new Subject<Order[]>()
  $orderApiData = this.orderApiData.asObservable()

  private amountNum = new Subject<number>()
  $amountNum = this.amountNum.asObservable()

  private totalPrice = new Subject<number>()
  $totalPrice = this.totalPrice.asObservable()

  private searchMovies = new Subject<IProduct[]>()
  $searchMovies = this.searchMovies.asObservable()

  constructor(private http: HttpClient) { }

  //Det funkade inte med GitHub pages att ha länkarna i environment

  getCategory() {
    this.http.get<ICategorySearch[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/categories').subscribe((data) =>{
      this.categoryApi.next(data)
    })
  }

  getData() {
    this.http.get<IProduct[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products').subscribe((data) => {
      this.products.next(data)
    })
  }

  searchTermFromUser(input: string) {
    this.http.get<IProduct[]>("https://medieinstitutet-wie-products.azurewebsites.net/api/search?searchText=" + input).subscribe((data) => {
      console.log(data);
      this.searchMovies.next(data)
    })
  }

  postData(order: Order) {
    let httpOptions = new HttpHeaders()
    httpOptions.append('', 'aplication/json')
    return this.http
      .post('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', order, { headers: httpOptions })
      .subscribe((result) => {
        console.log(result)
      })
  }

  getOrderApi() {
    this.http.get<Order[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=11').subscribe((data) => {
      this.orderApiData.next(data)
    })
  }

  saveTotalPrice(price: number[]) {
    this.totalPrice.next(price.reduce((a,b)=>a+b))
  }

  deleteOrder(id: number) {
      this.http.delete('https://medieinstitutet-wie-products.azurewebsites.net/api/orders/'+id+'?companyid=11').subscribe(() => this.getOrderApi())
  }

  amountInShopingsCArt(num: number) {
    this.amountNum.next(num)
  }

}
