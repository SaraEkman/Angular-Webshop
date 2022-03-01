import { IProduct } from './IProduct'

export class OrderRows {
  id: number;
  productId: number;
  product: IProduct;
  amount: number;
}
