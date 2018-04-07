import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit, OnDestroy {

  // local variables
  activeRouteSubs: any;

  constructor(private _actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRouteSubs = this._actRoute.params.subscribe(params => {
      // console.log(params['id']);
    });
  }

  ngOnDestroy() {
    this.activeRouteSubs.unSubscribe();
  }

}
