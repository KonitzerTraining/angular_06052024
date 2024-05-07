import { Component } from '@angular/core';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html'
})
export class CustomerNewComponent {
  public errorMessage: null | string = null;
  public loading = false;

  constructor(
    private customerService: CustomerService,
    private router: Router  
  ) {}

  createCustomer(customer: Omit<Customer, 'id'>) {
    this.errorMessage = null;
    this.loading = true;

    this.customerService
      .post(customer)
      .subscribe({ // observer
        next: () => {
          this.router.navigateByUrl('/customers');
          this.loading = false;
        },
        error: (e: Error) => {
          this.errorMessage = e.message;
          this.loading = false;
        }
      });
  }


}
