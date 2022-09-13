import { Injectable } from '@angular/core';
import { BooksClient } from '../clients/books.client';
import { Book } from '../models/books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private booksClient: BooksClient) {}

  public getAllBooks() {
    return this.booksClient.getBooks();
  }

  public getLatestBooks() {
    return this.booksClient.getLatestBooks(0, 3);
  }

  public trackBookById(index: number, book: Book) {
    return book.id;
  }
}
