import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-index',
  template: `
    <h1 class="display-3">
      Dashboard
    </h1>
    <router-outlet></router-outlet>
  `
})
export class CustomerIndexComponent {

}
