import { 
  Component, 
  Input, 
  Output,
  EventEmitter, 
} from '@angular/core';
import { IBike } from './bike.d';
import './bike.scss';

@Component({
  selector: 'bike',
  template: `<article class="c-bike" (click)="onClick(bike)">
    <header class="c-bike__header">
      <p class="c-bike__price">
        {{ bike.balance }}
      </p>
      <h3>{{ bike.name }}</h3>
    </header>
    <picture class="c-bike__picture">
      <img [src]="bike.picture" alt="Preview" class="c-bike__img" />
    </picture>
  </article>`,
})
export class BikeComponent {
  @Input() bike: IBike;
  @Output() onBikeClick: EventEmitter<any> = new EventEmitter();
  onClick(bike) {
    this.onBikeClick.emit(bike);
  }
}
