import { Component } from '@angular/core';
import { GetdataService } from './services/getdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Webshop';
  totalPNu: number = JSON.parse(localStorage.getItem('totalPNums') || '[]')

  constructor(private service: GetdataService) {
    this.service.$amountNum.subscribe((num)=>{this.totalPNu = num})
  }
}
