import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LegalModule } from './features/legal/legal.module';
import { StartModule } from './features/start/start.module';
import { DefaultPageComponent } from './default-page.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    DefaultPageComponent
  ],
  imports: [
    BrowserModule,

    // Shared Module
    CoreModule,

    // Feature Module
    StartModule,
    LegalModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
