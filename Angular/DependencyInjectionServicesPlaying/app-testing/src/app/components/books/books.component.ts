import { Component, OnInit, Injectable } from '@angular/core';
import { BooksService } from './../../books.service'
import { Book } from './../../../book'

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [ BooksService ]
  
})
export class BooksComponent implements OnInit {



  public books: Book[]
  constructor(
    private booksService : BooksService
  ) { }

  ngOnInit(){
    this.books = this.booksService.getData();
  }

}
