import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html'
})
export class CustomerFormComponent implements OnInit{

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

  @Input()
  formData: Customer | undefined;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if(this.formData !== void 0) {
      this.customerForm.patchValue(this.formData);
    }
  }

  formSubmitHandler() {
    const customer = this.customerForm.value;
    this.customerSubmit.emit(customer)
  }
}
