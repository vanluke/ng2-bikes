import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as Firebase from 'firebase';
import { config } from './firebase.config';
import 'rxjs/add/observable/dom/ajax';
import { IBike } from './bike.d';
// tslint:disable-next-line:import-name
const bikes = require('./mock-bikes.json');

@Injectable()
export class BikeService {
  constructor() {
    
    this.app = Firebase.initializeApp(config);
    this.db = Firebase.database(this.app);
    Firebase.auth().signInAnonymously().catch(function(error) {
      console.log(error);
    });
  }

  getBikes(): Observable<any> {
    return Observable.fromPromise(new Promise((resolve, reject) => 
      Firebase.database()
      .ref('bikes')
      .once('value')
      .then(sn => resolve(Array.from(sn.val().filter(n => !!n))))
      .catch(error => reject(error))));
  }

  getBike(id: string): Observable<IBike> {
    const lb = Array.from(bikes as any);
    return Observable.of(lb[0]);
  }

  db: any;
  app: any;
}
