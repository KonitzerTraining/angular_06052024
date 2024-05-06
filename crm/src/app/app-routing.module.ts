import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './features/start/start-page/start-page.component';
import { DefaultPageComponent } from './default-page.component';

const routes: Routes = [
 {
  path: '**', // Wildcard
  component: DefaultPageComponent,
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
