import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IProduct } from 'src/app/models/IProduct'
import { GetdataService } from 'src/app/services/getdata.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  PriceArr: number[] = []
  Price: number = 0
  productId: number = 0
  products: IProduct[] = []
  product: IProduct = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
    year: 0,
    added: '',
    productCategory: [
      {
        categoryId: 0,
        category: null,
      },
    ],
  }

  constructor(private route: ActivatedRoute, private service: GetdataService) {}

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.productId = +p['id']
    })
    this.service.getData()
    this.service.$theData.subscribe((data) => {
      this.products = data
      this.products.map((getProduct) => {
        if (getProduct.id == this.productId) {
          this.product = getProduct
        }
      })
    })

    this.Price = JSON.parse(localStorage.getItem('totalPrice') || '[]')
    this.PriceArr = JSON.parse(localStorage.getItem('PriceArr') || '[]')
  }

  saveOrder() {
    let orderProducts = JSON.parse(localStorage.getItem('Order') || '[]')
    orderProducts.push(this.product)

    localStorage.setItem('Order', JSON.stringify(orderProducts))
    this.service.amountInShopingsCArt(orderProducts.length)

    this.PriceArr.push(this.product.price)
    this.Price = JSON.parse(localStorage.getItem('totalPrice') || '[]')
    localStorage.setItem('PriceArr', JSON.stringify(this.PriceArr))
    this.Price = this.PriceArr.reduce((a, b) => a + b)
    localStorage.setItem('totalPrice', JSON.stringify(this.Price))
  }
}
