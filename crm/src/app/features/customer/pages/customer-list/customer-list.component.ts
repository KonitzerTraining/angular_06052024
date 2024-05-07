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

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.errorMessage = null;
    this.customerService
      .getAll()
      .subscribe({ // observer
        next: (customers: Customer[]) => {
          this.customers = customers;
        },
        error: (e: Error) => {
          this.errorMessage = e.message;
        }
      });
  }

}
