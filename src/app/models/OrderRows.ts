export class OrderRows {
  id: number
  productId: number
  product: string
  amount: number
  orderId: number
  constructor(pI: number, amo: number) {
    this.id = Number()
    this.productId = pI
    this.product = ''
    this.amount = amo
    this.orderId = Number()
  }
}
