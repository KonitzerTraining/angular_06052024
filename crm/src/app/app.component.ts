import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container my-4">
    <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = 'crm';
}
