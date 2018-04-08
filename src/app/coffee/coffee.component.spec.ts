import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeComponent } from './coffee.component';
import { AppMaterialModules } from '../app.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutes } from '../app.routes';

import { CoffeeListComponent } from '../coffee-list/coffee-list.component';
import { APP_BASE_HREF } from '@angular/common';

describe('CoffeeComponent', () => {
  let component: CoffeeComponent;
  let fixture: ComponentFixture<CoffeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule, AppRoutes, AppMaterialModules, FormsModule],
      declarations: [ CoffeeComponent, CoffeeListComponent ],
      providers: [
          { provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
