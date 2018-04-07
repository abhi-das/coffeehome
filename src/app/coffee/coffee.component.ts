import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
