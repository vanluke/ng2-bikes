import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<main>
    <header>
      <h1>{{ header }}</h1>
    </header>
    <nav class="c-app__nav">
       <a [routerLink]="['/']" class="c-app__link">Home</a>
     </nav>
    <router-outlet></router-outlet>
  </main>`,
})
export class AppComponent {
  header = 'Bikes';
}
