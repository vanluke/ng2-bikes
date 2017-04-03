import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/dom/ajax';
import { IBike } from './bike.d';
// tslint:disable-next-line:import-name
import bikes from './mock-bikes.json';

@Injectable()
export class BikeService {
    getBikes(): Observable<IBike[]> {
      // const postsRequest = fetch('https://jsonplaceholder.typicode.com/posts', {
      //   method: 'GET'
      // })
      // .then(response => response.json() as Promise<IBike[]>);
      return Observable.from(bikes);
    }
}
