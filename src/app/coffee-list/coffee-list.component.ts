import { CoffeeLocation } from '../coffee-model/coffeeLocation';
import { Coffee } from '../coffee-model/coffee';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./coffee-list.component.scss']
})
export class CoffeeListComponent implements OnInit {

  // Local variables
  coffeeList: [Coffee];

  constructor() { }

  ngOnInit() {

    // Initialize Coffee class with required fields only on component load

    this.coffeeList = [
      new Coffee('Frape', 'Bubble Cafe', new CoffeeLocation('25 Parkway Forest Drv.','Toronto')),
      new Coffee('Americano', 'Beach Cafe', new CoffeeLocation('153, Layton Ave.','Toronto'))
    ];

  }

}
