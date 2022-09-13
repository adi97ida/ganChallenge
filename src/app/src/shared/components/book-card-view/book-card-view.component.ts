import { Component, Input } from '@angular/core';
import { Book } from '../../models/books.model';
import { MatDialog } from '@angular/material/dialog';
import { BookExpandedViewComponent } from '../../dialogs/book-expanded-view/book-expanded-view.component';

@Component({
  selector: 'app-book-card-view',
  templateUrl: './book-card-view.component.html',
  styleUrls: ['./book-card-view.component.scss']
})
export class BookCardViewComponent {
  @Input() book!: Book;
  constructor(private dialogs: MatDialog) {}

  public showBookDetails() {
    this.dialogs.open(BookExpandedViewComponent, {
      data: {
        book: this.book
      }
    });
  }
}
