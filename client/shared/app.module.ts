import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BikesComponent } from '../bikes/bikes.component';
import { BikeComponent } from '../bikes/bike.component';
import { BikeDetailsComponent } from '../bikes/bike-details.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule } from '@angular/router';
import createStore from '../store/store';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import {
  HttpModule,
  JsonpModule,
 } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyADttZks1jR90AIOwtFafi56QzvXcjvaBg',
      authDomain: 'bikes-65e62.firebaseapp.com',
      databaseURL: 'https://bikes-65e62.firebaseio.com',
      storageBucket: 'bikes-65e62.appspot.com',
      messagingSenderId: '370587496280',
    }, 'bikes-65e62'),
    RouterModule.forRoot([{
      path: 'bikes',
      component: BikesComponent,
    }, {
      path: 'bikes/:id',
      component: BikeDetailsComponent,
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
    BikeDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
