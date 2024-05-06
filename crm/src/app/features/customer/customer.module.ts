import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerIndexComponent } from './customer-index.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { CustomerNewComponent } from './pages/customer-new/customer-new.component';
import { CustomerEditComponent } from './pages/customer-edit/customer-edit.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CustomerIndexComponent,
    CustomerListComponent,
    CustomerNewComponent,
    CustomerEditComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
