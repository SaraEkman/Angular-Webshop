import { IProduct } from './IProduct'

export class OrderRows {
  id: number;
  productId: number;
  product: IProduct;
  amount: number;
  orderId: number;
  constructor(id: number, pI: number,P:IProduct, amo: number, orI: number) {
    this.id = id;
    this.productId = pI;
    this.product = P;
    this.amount = amo;
    this.orderId = orI;
  }
}
