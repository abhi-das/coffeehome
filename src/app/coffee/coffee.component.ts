import { TestingRating } from '../coffee-model/TestingRating';
import { Coffee } from '../coffee-model/coffee';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./coffee.component.scss']
})

export class CoffeeComponent implements OnInit, OnDestroy {

  // local variables
  activeRouteSubs: any;
  coffee: Coffee;
  opts = ['Coffee A', 'Coffee B', 'Coffee C'];

  constructor(private _actRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit() {

    this.coffee = new Coffee();
    this.activeRouteSubs = this._actRoute.params.subscribe(params => {
      // console.log(params['id']);
    });
  }

  ngOnDestroy() {
    // this.activeRouteSubs.unSubscribe();
  }

  testRatingChange(checked: boolean): void {

    if (checked) {
      this.coffee.testingRating = new TestingRating();
    } else {
      this.coffee.testingRating = null;
    }
  }

  cancel(): void {
    this._router.navigate(['/']);
  }

  save(): void { }

}
