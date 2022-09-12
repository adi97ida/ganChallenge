import {AfterViewInit, Component, OnInit} from '@angular/core';
import {BooksService} from "../../shared/services/books.service";
import {take} from "rxjs";
import {Book} from "../../shared/models/books.model";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, AfterViewInit {

  public allBooks: Book[] = [];
  constructor(public booksService: BooksService) { }

  ngOnInit(): void {
    this.loadAllBooks();
  }

  private loadAllBooks() {
    this.booksService.getAllBooks().pipe(take(1)).subscribe((allBooks) => {
      this.allBooks = allBooks;
    })
  }

  ngAfterViewInit(): void {

  }

}
