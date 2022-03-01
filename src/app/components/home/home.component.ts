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
  LSProducts: IProduct[] = [];
  amount: number = 0;

  constructor(private service: GetdataService) {}

  ngOnInit(): void {
    this.service.getData()
    // this.service.theData$.subscribe((data)=> this.products = data)
    if (localStorage.getItem('Products')) {
      let productsArr: string = localStorage.getItem('Products') || '[]'
      console.log(JSON.parse(productsArr))
      this.products = JSON.parse(productsArr)
    }

    // if (localStorage.getItem('amountNu')) {
    //   let nums: string = localStorage.getItem('amountNu') || '[]'
    //   this.amount = JSON.parse(nums)
    // }
  }


  saveProduct(p: IProduct) {
    this.LSProducts.push(p);
    console.log(this.LSProducts);
    localStorage.setItem('Order', JSON.stringify(this.LSProducts));
    this.amount += 1;
    console.log(this.amount);
    // localStorage.setItem('amountNu', JSON.stringify(this.amount))
  }
}
