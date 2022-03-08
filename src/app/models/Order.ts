import { OrderRows } from "./OrderRows";
import { User } from "./User";

export class Order {
  id: number;
  companyId: number;
  created: string;
  createdBy: string;
  paymentMethod: string;
  totalPrice: number;
  status: number;
  orderRows: OrderRows[];
  constructor(user: User, totalPri: number, orderR: OrderRows[]) {

    this.id = Number();
    this.companyId = 11;
    this.created = (new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0]);
    this.createdBy = user.firstName
    this.paymentMethod = user.paymentM;
    this.totalPrice = totalPri;
    this.status = 0;
    this.orderRows = orderR;
  }
}
