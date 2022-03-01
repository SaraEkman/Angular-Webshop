import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {
  products: IProduct[] = [];
  amountNu:number = 0;


  constructor() { }

  ngOnInit(): void {
    this.products = JSON.parse(localStorage.getItem('Order') || '[]');
    // this.amountNu = JSON.parse(localStorage.getItem('amountNu') || '[]');
  }


  plus() {
    if(this.amountNu>=0) this.amountNu += 1;
      // localStorage.setItem('amountNu', JSON.stringify(this.amountNu))
    console.log(this.amountNu);
  }

  minus() {
    if(this.amountNu>0) this.amountNu -= 1;
      // localStorage.setItem('amountNu', JSON.stringify(this.amountNu))
  }

}
