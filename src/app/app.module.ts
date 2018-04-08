import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatButton, MatIconModule, MatInputModule, MatSelectModule,
  MatSliderModule, MatToolbarModule, MatCardModule, MatSlideToggleModule, MatButtonModule, MatIcon
} from '@angular/material';
import 'hammerjs';
import { CoffeeComponent } from './coffee/coffee.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { AppRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent,
    CoffeeListComponent
  ],
  imports: [
    AppRoutes,
    FormsModule,
    BrowserModule, BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatInputModule, MatSelectModule,
    MatSliderModule, MatToolbarModule, MatCardModule, MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
