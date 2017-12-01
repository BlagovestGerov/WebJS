import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';

import { BooksService } from './books.service';
import { GitComponent } from './git/git.component'

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    GitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent],
})
export class AppModule { }
