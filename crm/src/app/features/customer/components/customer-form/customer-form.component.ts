import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html'
})
export class CustomerFormComponent {

  customerForm = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(2)
      ]
    ],
    credit: [
      0,
      [
        Validators.required,
        Validators.min(0),
      ]
    ],
  });

  @Output()
  customerSubmit = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  formSubmitHandler() {
    const customer = this.customerForm.value;
    this.customerSubmit.emit(customer)
  }
}
