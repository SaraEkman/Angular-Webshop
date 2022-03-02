import { OrderRows } from "./OrderRows";
import { User } from "./user";

export class Order {
  id: number;
  companyId: number;
  created: Date;
  createdBy: string;
  paymentMethod: string;
  totalPrice: number;
  status: number;
  orderRows: OrderRows[];
  constructor(user: User, tP: number, st: number, oR: OrderRows[]) {
    let uniqeId = Math.floor(Math.random() * 100)
    this.id = uniqeId;
    this.companyId = 11;
    this.created = new Date();
    this.createdBy = user.firstName + ' ' + user.lastName + ' ' + user.city;
    this.paymentMethod = "Paypal";
    this.totalPrice = tP;
    this.status = st;
    this.orderRows = oR;
  }
}
