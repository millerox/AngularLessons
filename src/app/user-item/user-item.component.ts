import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.sass']
})
export class UserItemComponent implements OnInit {

  name: string; // declaring var string type

  constructor() {
     this.name = 'Oksana';
  }

  ngOnInit() {
  }

}
