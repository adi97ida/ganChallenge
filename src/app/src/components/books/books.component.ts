import { BooksService } from '../../shared/services/books.service';
import { Book } from '../../shared/models/books.model';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  public allBooks: Book[] = [];
  constructor(public booksService: BooksService) {}

  ngOnInit(): void {
    this.loadAllBooks();
  }

  private loadAllBooks() {
    this.booksService
      .getAllBooks()
      .pipe(take(1))
      .subscribe((allBooks) => {
        this.allBooks = allBooks;
      });
  }
}
