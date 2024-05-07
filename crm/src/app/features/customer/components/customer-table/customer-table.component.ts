import { Component, Input } from '@angular/core';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html'
})
export class CustomerTableComponent {

  @Input()
  tableData: Customer[] = [];

}
