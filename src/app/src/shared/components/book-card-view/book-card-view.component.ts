import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../../models/books.model";

@Component({
  selector: 'app-book-card-view',
  templateUrl: './book-card-view.component.html',
  styleUrls: ['./book-card-view.component.scss']
})
export class BookCardViewComponent implements OnInit {
  @Input() book!: Book;
  constructor() { }

  ngOnInit(): void {
  }

}
