import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: IProduct[] = []

  constructor(private service: ProductService) { }

  ngOnInit(): void {
       this.service.getData()
    // this.service.theData$.subscribe((data)=> this.products = data)
    if (localStorage.getItem('products')) {
      let productsArr: string = localStorage.getItem('products') || '[]'
      console.log(JSON.parse(productsArr))
      this.products = JSON.parse(productsArr);
    }
  }
  }


