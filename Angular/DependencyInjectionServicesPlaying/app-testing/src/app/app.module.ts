import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';

import { BooksService } from './books.service'

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent],
})
export class AppModule { }
