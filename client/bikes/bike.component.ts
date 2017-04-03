import { Component, Input } from '@angular/core';
import { IBike } from './bike.d';

@Component({
  selector: 'bike',
  template: `<article class="c-bike">
    <header class="c-bike__header">
      <h3>{{ bike.name }}</h3>
    </header>
    <picture class="c-bike__picture">
      <img [src]="bike.image" alt="Preview" />
    </picture>
    <footer class="c-bike__footer">
      {{ bike.balance }}
    </footer>
  </article>`,
})
export class BikeComponent {
  @Input() bike: IBike;
}
