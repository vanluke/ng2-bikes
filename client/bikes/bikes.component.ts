import { 
  Component, 
  OnInit, 
  OnDestroy,
  Inject, 
} from '@angular/core';
import { IBike } from './bike.d';
import { 
  bikesFetch,
  bikesBannerTimerStart,
} from './bikes-epics';
import './bikes.scss';

@Component({
  selector: 'bikes',
  template:`<section class="c-bikes">
    <div class="c-bikes c-bikes--selected">
      <h2>See our bikes</h2> {{ selectedId }}
      <div class="c-bikes__banner">
        <span class="c-bikes c-bikes__title"> {{ currentBike.name }} </span>
        <img 
          [src]="currentBike.picture" 
          class="c-bikes__image c-bikes__image--fullpage" 
        />
      </div>
    </div>
    <section class="c-bikes__list">
      <div *ngFor="let b of bikes" class="c-bikes__item">
        <bike [bike]="b" (onBikeClick)="onBikeClick(b)"></bike>
      </div>
    </section>
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
      this.selectedId = bikes.selectedId;
      this.currentBike = this.bikes[this.selectedId] || <IBike>{};
      this.isLoading = bikes.isLoading;
    });
    dispatch(bikesFetch());
   // dispatch(bikesBannerTimerStart(this.bikes.length));
  }

  constructor(@Inject('store') private store) {

  } 

  onBikeClick(bike) {
    this.currentBike = bike;
  }

  selectedId: number;
  isLoading: boolean = false;
  subscription: any;
  bikes: IBike[];
  currentBike: IBike;
}
