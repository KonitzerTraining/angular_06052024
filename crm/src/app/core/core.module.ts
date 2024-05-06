import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';



@NgModule({
  declarations: [
    MainNavigationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainNavigationComponent
  ]
})
export class CoreModule { }
