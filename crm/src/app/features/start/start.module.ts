import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './start-page/start-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StartPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'start',
        component: StartPageComponent
      }
    ])
  ]
})
export class StartModule { }
