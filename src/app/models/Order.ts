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
  constructor(user: User, ) {
    this.id = ;
    this.created = new Date();
    this.createdBy = user.firstName + ' ' + user.lastName;
  }
}
