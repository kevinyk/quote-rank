import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesAddComponent } from './quotes/quotes-add/quotes-add.component';
import { QuotesListComponent } from './quotes/quotes-list/quotes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesAddComponent,
    QuotesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
