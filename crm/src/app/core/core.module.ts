import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    MainNavigationComponent
  ]
})
export class CoreModule { }
