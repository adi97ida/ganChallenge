import { Injectable } from '@angular/core';
import {BooksClient} from "../clients/books.client";
import {Book} from "../models/books.model";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor(private booksClient: BooksClient) { }

  getAllBooks() {
      return this.booksClient.getBooks();
  }

  getLatestBooks() {
      return this.booksClient.getLatestBooks(0, 3);
  }

  trackBookById(index: number, book: Book) {
    return book.id;
  }
}
