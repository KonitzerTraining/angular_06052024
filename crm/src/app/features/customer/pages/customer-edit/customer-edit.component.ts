import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../../model/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html'
})
export class CustomerEditComponent implements OnInit {

  public id = this.activatedRoute.snapshot.params['id'];
  public customer !: Customer;
  public errorMessage: null | string = null;
  public loading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
  ) {}

  ngOnInit(): void {
    this.loadCustomer();
  }

  loadCustomer() { 
    this.errorMessage = null;
    this.loading = true;

    this.customerService
      .getById(this.id)
      .subscribe({ // observer
        next: (customer: Customer) => {
          this.customer = customer;
          this.loading = false;
        },
        error: (e: Error) => {
          this.errorMessage = e.message;
          this.loading = false;
        }
      });
  }
}
