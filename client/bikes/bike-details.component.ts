import { 
  Component, 
  Inject, 
  OnInit, 
  OnDestroy,
} from '@angular/core';
import { fetchBike } from './bikes-epics';
import { IBike } from './bike.d';
import { ActivatedRoute } from '@angular/router';
import './bike-details.scss';

@Component({
  selector: 'bike-details',
  template: `<section class="c-bike-details l-bike">
    <div class="l-bike__visual">
      <picture class="c-bike-details__picture">
        <img [src]="bike.picture" [alt]="bike.name" />
      </picture>
    </div>
    <div class="l-bike__description">
      <article class="c-bike_details__description">
        <p>{{ bike.description }}</p>
      </article>
    </div>
  </section>`,
})
export class BikeDetailsComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.subscription();
    this.routerSubscription.unsubscribe();
  }

  ngOnInit(): void {
    const { dispatch } = this.store;
    this.subscription = this.store.subscribe(() => {
      const { bikes } = this.store.getState();
      this.bike = bikes.bike;
      this.isLoading = bikes.isLoading;
    });
    this.routerSubscription = this.router
      .params
      .subscribe(params => dispatch(fetchBike(params.id)));
  }

  constructor(@Inject('store') private store, private router: ActivatedRoute) {}

  subscription: Function;
  routerSubscription: any;
  isLoading: boolean = false;
  bike: IBike;
}