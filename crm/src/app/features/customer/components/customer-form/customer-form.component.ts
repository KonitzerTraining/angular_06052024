import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html'
})
export class CustomerFormComponent {

  @Output()
  formSubmit = new EventEmitter();

  formSubmitHandler() {
    console.log('submit');
  }
}
