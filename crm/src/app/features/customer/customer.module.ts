import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerIndexComponent } from './customer-index.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { CustomerNewComponent } from './pages/customer-new/customer-new.component';
import { CustomerEditComponent } from './pages/customer-edit/customer-edit.component';

import { HttpClientModule } from '@angular/common/http';
import { CustomerTableComponent } from './components/customer-table/customer-table.component';
import { CoreModule } from '../../core/core.module';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';


@NgModule({
  declarations: [
    CustomerIndexComponent,
    CustomerListComponent,
    CustomerNewComponent,
    CustomerEditComponent,
    CustomerTableComponent,
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
