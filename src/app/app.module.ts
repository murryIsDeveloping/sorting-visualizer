import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortingModule } from '@vizModules/sorting/sorting.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SortingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
