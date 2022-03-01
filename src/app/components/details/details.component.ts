import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IProduct } from 'src/app/models/IProduct'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  productId: number = 0
  product: IProduct = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
    year: 0,
    added: '',
    productCategory: [{
      categoryId: 0,
      category: null
    }]
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let products: IProduct[] = JSON.parse(localStorage.getItem('products') || '[]')
    this.route.params.subscribe((p) => {

      products.map((getProduct) => {
        if (getProduct.id == p['id']) {
          this.productId = +p['id']
          this.product = getProduct;
        }
      })
    })
  }



  saveId() {
    
  }
}
