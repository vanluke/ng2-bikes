import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule } from '@angular/router';
import createStore from '../store/store';
import { FormsModule } from '@angular/forms';
import {
  HttpModule,
  JsonpModule,
 } from '@angular/http';

const appStoreFactory = () => {
  return createStore();
};

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'home',
      component: AppComponent,
    },
    ]),
    HttpModule,
    JsonpModule,
    FormsModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    { provide: 'store', useFactory: appStoreFactory },
  ],
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
