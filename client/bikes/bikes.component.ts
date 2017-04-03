import { Component } from '@angular/core';
import { IBike } from './bike.d';

@Component({
  selector: 'bikes',
  template:`<section class="c-bikes">
    <div *ngFor="let bike of bikes">
      <bike [bike]="bike" />
    </div>
  </section>`,
})
export class BikesComponent {
    
  bikes: IBike[];
}
