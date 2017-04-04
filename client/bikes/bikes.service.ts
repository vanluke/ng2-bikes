import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/dom/ajax';
import { IBike } from './bike.d';
// tslint:disable-next-line:import-name
const bikes = require('./mock-bikes.json');

@Injectable()
export class BikeService {
    getBikes(): Observable<IBike[]> {
      // const postsRequest = fetch('https://jsonplaceholder.typicode.com/posts', {
      //   method: 'GET'
      // })
      // .then(response => response.json() as Promise<IBike[]>);
      const lb = Array.from(bikes as any);
      return Observable.of(lb);
    }
}
