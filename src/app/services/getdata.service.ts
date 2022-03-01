import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  private theData = new Subject<IProduct[]>()
  theData$ = this.theData.asObservable()
  totalProductsNu:number = 0;


  constructor(private http:HttpClient) { }

  getData() {
    this.http.get<IProduct[]>(environment.ApiProducts).subscribe((data) => {
      // console.log(data)
      this.theData.next(data)
      localStorage.setItem('Products', JSON.stringify(data))
    })
  }
  // getTotalNu() {
  //   let num = JSON.parse(localStorage.getItem('amountNu') || '[]');
  //   if (num)
  //     this.totalProductsNu = num;
  // }
}
