import { AppMaterialModules } from './app.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import 'hammerjs';
import { CoffeeComponent } from './coffee/coffee.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { AppRoutes } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent,
    CoffeeListComponent
  ],
  imports: [
    AppRoutes,
    ReactiveFormsModule,
    BrowserModule, BrowserAnimationsModule, AppMaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
