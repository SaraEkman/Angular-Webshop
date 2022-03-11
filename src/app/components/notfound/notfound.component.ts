import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {
  imgUrl: string = 'https://img.freepik.com/free-vector/404-error-web-template-with-funny-monster_23-2147788951.jpg?w=1060'
  constructor() { }

  ngOnInit(): void {
  }

}
