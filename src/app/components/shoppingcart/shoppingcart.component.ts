import { Component, OnInit } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { IProduct } from 'src/app/models/IProduct'
import { Order } from 'src/app/models/Order'
import { OrderRows } from 'src/app/models/OrderRows'
import { User } from 'src/app/models/User'
import { GetdataService } from 'src/app/services/getdata.service'

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss'],
})
export class ShoppingcartComponent implements OnInit {
  products: IProduct[] = []
  userArray: User[] = []
  userInfo: User = new User('', '', '', '', '', '', '', '')
  Price: number = 0
  orderRows: OrderRows[] = []
  createOrder: Order = new Order(this.userInfo, this.Price, this.orderRows)

  amount: number = 0
  done: boolean = false
  show: boolean = false

  userForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    street: ['', [Validators.required, Validators.minLength(3)]],
    zip: ['', [Validators.required, Validators.minLength(5)]],
    city: ['', [Validators.required, Validators.minLength(2)]],
    country: ['', [Validators.required, Validators.minLength(2)]],
    phoneNum: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.minLength(2)]],
  })

  constructor(private fb: FormBuilder, private service: GetdataService) {}

  ngOnInit(): void {
    this.products = JSON.parse(localStorage.getItem('Order') || '[]')

    if (localStorage.getItem('totalPrice')) {
      this.Price = JSON.parse(localStorage.getItem('totalPrice') || '[]')
    }

    this.userInfo = JSON.parse(localStorage.getItem('myOrdercompanyUser') || '[]')
  }

  removeP(i: number, p: IProduct) {
    this.Price = this.Price - p.price
    localStorage.setItem('totalPrice', JSON.stringify(this.Price))
    console.log(this.Price)

    this.products.splice(i, 1)
    localStorage.setItem('Order', JSON.stringify(this.products))
    this.service.amountInShopingsCArt(this.products.length)
  }

  handleChange() {
    this.getUser()
    this.service.amountInShopingsCArt(0)

    this.done = false
    this.show = true

    this.postData()
    this.service.amountInShopingsCArt(0)
    this.products = []
    this.Price = 0
    localStorage.removeItem('Order')
    localStorage.removeItem('totalPrice')
    localStorage.removeItem('PriceArr')
  }

  showUserForm() {
    this.done = !this.done
  }

  postData() {
    for (let el of this.products) {
      this.orderRows.push(new OrderRows(el.id, 1))
    }
    this.createOrder = new Order(this.userInfo, this.Price, this.orderRows)
    this.service.postData(this.createOrder)
  }

  getUser() {
    const userInfo = this.userForm.value

    const user: User = new User(
      userInfo.firstName,
      userInfo.lastName,
      userInfo.street,
      userInfo.zip,
      userInfo.city,
      userInfo.country,
      userInfo.phoneNum,
      userInfo.email,
    )

    this.userInfo = user
    localStorage.setItem('myOrdercompanyUser', JSON.stringify(this.userInfo))

    this.userForm.reset()
  }
}
