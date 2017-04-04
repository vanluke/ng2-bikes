import { 
  Component, 
  OnInit, 
  OnDestroy,
  Inject, 
} from '@angular/core';
import { IBike } from './bike.d';
import { bikesFetch } from './bikes-epics';

@Component({
  selector: 'bikes',
  template:`<section class="c-bikes">
    <div *ngFor="let b of bikes">
      <bike [bike]="b"></bike>
    </div>
  </section>`,
})
export class BikesComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.subscription();
  }

  ngOnInit(): void {
    const { dispatch } = this.store;
    this.subscription = this.store.subscribe(() => {
      const { bikes } = this.store.getState();
      this.bikes = bikes.bikes;
      this.isLoading = bikes.isLoading;
    });
    dispatch(bikesFetch());
  }

  constructor(@Inject('store') private store) {

  } 

  isLoading: boolean = false;
  subscription: any;
  bikes: IBike[];
}
