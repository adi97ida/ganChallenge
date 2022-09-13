import { Injectable } from '@angular/core';
import Fuse from 'fuse.js';
import { BooksService } from './books.service';
import { Book } from '../models/books.model';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private allBooks: Book[] = [];
  private fuseSearchInstance?: Fuse<Book>;
  constructor(private booksService: BooksService) {
    this.booksService
      .getAllBooks()
      .pipe(take(1))
      .subscribe((books) => {
        this.allBooks = books;

        const options = { keys: ['name', 'author', 'tags'], threshold: 0.5 };
        const booksFuseIndex = Fuse.createIndex(options.keys, books);

        this.fuseSearchInstance = new Fuse(
          this.allBooks,
          options,
          booksFuseIndex
        );
      });
  }

  private searchThroughAllBooks(searchString: string) {
    return this.fuseSearchInstance?.search(searchString);
  }

  public returnFoundBooks(searchString: string) {
    const foundBooks = this.searchThroughAllBooks(searchString);

    if (foundBooks?.length) {
      return foundBooks.map((result) => result.item);
    } else {
      return null;
    }
  }
}
