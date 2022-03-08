export class User {
  firstName: string;
  lastName: string;
  street: string;
  zip: string;
  city: string;
  country: string;
  phoneNum: string;
  email: string;
  paymentM: string;

  constructor(
    fN: string,
    lN: string,
    street: string,
    zip: string,
    city: string,
    cou: string,
    pN: string,
    em: string,
    pM:string
  ) {
    this.firstName = fN;
    this.lastName = lN;
    this.street = street;
    this.zip = zip;
    this.city = city;
    this.country = cou;
    this.phoneNum = pN;
    this.email = em;
    this.paymentM = pM;
  }
}
