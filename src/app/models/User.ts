export class User {
  firstName: string;
  lastName: string;
  street: string;
  zip: number;
  city: string;
  country: string;
  phoneNum: number;
  email: string;

  constructor(fN: string, lN: string, str: string, z:number, c: string, cou: string, pN: number, em: string) {
    this.firstName = fN;
    this.lastName = lN;
    this.street = str;
    this.zip = z;
    this.city = c;
    this.country = cou;
    this.phoneNum = pN;
    this.email = em;
  }

}

