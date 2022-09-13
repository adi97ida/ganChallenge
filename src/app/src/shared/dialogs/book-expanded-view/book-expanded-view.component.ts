import { Component, Inject } from '@angular/core';
import { Book } from '../../models/books.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-book-expanded-view',
  templateUrl: './book-expanded-view.component.html',
  styleUrls: ['./book-expanded-view.component.scss']
})
export class BookExpandedViewComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { book: Book }) {}
}
