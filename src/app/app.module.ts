import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ng8DataTableModule } from 'ng8-data-table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng8DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
