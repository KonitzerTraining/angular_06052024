import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html'
})
export class CustomerTableComponent {

  @Input()
  tableData: Customer[] = [];

  @Output()
  deleteEvent = new EventEmitter<number>();

  deleteCustomer(id: number) {
    this.deleteEvent.emit(id);
  }

}
