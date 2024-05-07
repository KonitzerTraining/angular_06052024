import { Component } from '@angular/core';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html'
})
export class CustomerNewComponent {
  public errorMessage: null | string = null;
  public loading = false;

  createCustomer(customer: Omit<Customer, 'id'>) {
    console.log(customer);
  }
}
