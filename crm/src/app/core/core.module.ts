import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { RouterModule } from '@angular/router';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';



@NgModule({
  declarations: [
    MainNavigationComponent,
    LoadingIndicatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    MainNavigationComponent,
    LoadingIndicatorComponent
  ]
})
export class CoreModule { }
