import { Component } from '@angular/core';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html'
})
export class CustomerNewComponent {
  public errorMessage: null | string = null;
  public loading = false;

  constructor(private customerService: CustomerService) {}

  createCustomer(customer: Omit<Customer, 'id'>) {
    this.errorMessage = null;
    this.loading = true;

    this.customerService
      .post(customer)
      .subscribe({ // observer
        next: (customer: Customer) => {
          console.log(customer),
          this.loading = false;
        },
        error: (e: Error) => {
          this.errorMessage = e.message;
          this.loading = false;
        }
      });
  }


}
