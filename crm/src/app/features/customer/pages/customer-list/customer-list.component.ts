import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
})
export class CustomerListComponent implements OnInit {

  public customers: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService
      .getAll()
      .subscribe({
        next: (customers: Customer[]) => {
          this.customers = customers;
        },
        error: (e) => {
          console.log(e);
        }
      });
  }

}
