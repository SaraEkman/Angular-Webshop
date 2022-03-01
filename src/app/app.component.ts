import { Component } from '@angular/core';
import { GetdataService } from './services/getdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-Webshop';

  totalProductNu: number = 0;
  constructor(private service: GetdataService) {
  }
  ngOnInit() {
    // this.service.getTotalNu()
    // this.totalProductNu = this.service.totalProductsNu;
    // console.log(this.totalProductNu);
  }

}
