import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CarApiComponent } from './components/car-api/car-api.component';
import { HttpClientModule } from '@angular/common/http';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarComponent } from './components/car/car.component';


@NgModule({
  declarations: [
    AppComponent,
    CarApiComponent,
    CarListComponent,
    CarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
