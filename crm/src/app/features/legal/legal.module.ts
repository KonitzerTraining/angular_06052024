import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalRoutingModule } from './legal-routing.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';


@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    LegalRoutingModule
  ]
})
export class LegalModule { }
