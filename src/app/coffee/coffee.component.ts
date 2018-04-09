import { CoffeeLocation } from '../coffee-model/coffeeLocation';
import { TestingRating } from '../coffee-model/TestingRating';
import { Coffee } from '../coffee-model/coffee';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, OnDestroy, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./coffee.component.scss']
})

export class CoffeeComponent implements OnInit, OnDestroy {

  // local variables
  activeRouteSubs: any;
  // coffee: Coffee;
  opts = ['Coffee A', 'Coffee B', 'Coffee C'];
  tempFormDt: any;
  coffeeInfoForm: FormGroup;

  constructor(private _actRoute: ActivatedRoute, 
        private _router: Router, 
        private _fb: FormBuilder) { 
      
      this.createForm();
  }

  ngOnInit() {
    // this.activeRouteSubs = this._actRoute.params.subscribe(params => {
    //   // console.log(params['id']);
    // });
  }

  // Create Form
  createForm(): void {

    this.coffeeInfoForm = this._fb.group({
      name: this._fb.control('', Validators.required),
      type: this._fb.control(null),
      rating: this._fb.control(null),
      location: this._fb.group({
        address: this._fb.control(null),
        city: this._fb.control(null),
        lat: this._fb.control(null),
        lang: this._fb.control(null)
      }),
      testRating: this._fb.control(null),
      testingRating: this._fb.group({
        aroma: this._fb.control(null),
        flavor: this._fb.control(null),
        intensity: this._fb.control(null),
        sweetness: this._fb.control(null)
      }),
      notes: this._fb.control(null)
    });

  // ValueChanges event binding on form field
   this.coffeeInfoForm.get('testRating').valueChanges.subscribe(vl => {
       if (!vl) {
          this.coffeeInfoForm.get('testingRating').reset();
       }
    });
  }

  ngOnDestroy() {
    // this.activeRouteSubs.unSubscribe();
  }

  cancel(): void {
    this._router.navigate(['/']);
  }

  save(): void {
    Object.keys(this.coffeeInfoForm.controls).forEach(field => { // {1}
      const control = this.coffeeInfoForm.get(field);            // {2}
      control.markAsTouched({ onlySelf: true });       // {3}
    });
    this.tempFormDt = this.coffeeInfoForm.value;
  }

}
