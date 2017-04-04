import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BikesComponent } from '../bikes/bikes.component';
import { BikeComponent } from '../bikes/bike.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule } from '@angular/router';
import createStore from '../store/store';
import { FormsModule } from '@angular/forms';
import {
  HttpModule,
  JsonpModule,
 } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'bikes',
      component: BikesComponent,
    }
    ]),
    HttpModule,
    JsonpModule,
    FormsModule,
  ],
  providers: [
    { provide: 'store', useValue: createStore() },
  ],
  declarations: [
    AppComponent,
    BikeComponent,
    BikesComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
