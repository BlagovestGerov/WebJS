import { Injectable } from '@angular/core';
import { Book } from './../book'

@Injectable()
export class BooksService {

  getData() : Book[] {
    return [ 
    new Book('It', 'Stephen King', 23.2, new Date(1986, 9, 15)),
    new Book('Harry Potter and the philosophers stone', 'J.K           Rowling', 22.1, new Date(1997, 6, 	26)),
    new Book('Fundamentals of programming with C#', 'Svetlin Nakov', 50, new Date(2016, 6, 6)), 
    ]}
 

}
