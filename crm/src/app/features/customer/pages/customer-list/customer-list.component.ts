import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
})
export class CustomerListComponent implements OnInit {

  public customers: Customer[] = [];
  public errorMessage: null | string = null;
  public loading = false;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  deleteCustomer(id: number) {
    this.errorMessage = null;
    this.loading = true;

    this.customerService
      .deleteById(id)
      .subscribe({ // observer
        next: () => {
          this.loadCustomers();
        },
        error: (e: Error) => {
          this.errorMessage = e.message;
          this.loading = false;
        }
      });
  }

  loadCustomers() { 
    this.errorMessage = null;
    this.loading = true;

    this.customerService
      .getAll()
      .subscribe({ // observer
        next: (customers: Customer[]) => {
          this.customers = customers;
          this.loading = false;
        },
        error: (e: Error) => {
          this.errorMessage = e.message;
          this.loading = false;
        }
      });
  }

}
