import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {BooksService} from "../../shared/services/books.service";
import {debounceTime, distinctUntilChanged, Subscription, take} from "rxjs";
import {Book} from "../../shared/models/books.model";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, AfterViewInit, OnDestroy {
  searchFormControl: FormControl = new FormControl();
  lastAddedBooks: Book[] = [];

  private searchBoxValueSub?: Subscription;
  constructor(public booksService: BooksService,
              private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadLastAddedBooks();
  }

  ngAfterViewInit(): void {
    this.watchForSearchValueChanges();
  }



  private loadLastAddedBooks() {
    this.booksService.getLatestBooks().pipe(take(1)).subscribe((lastBooks) => {
      this.lastAddedBooks = lastBooks;
    })
  }

  private watchForSearchValueChanges() {
    this.searchBoxValueSub = this.searchFormControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe((val) => {
      if (val) {

      } else {
        this.loadLastAddedBooks();
      }
    })
  }

  ngOnDestroy(): void {
    this.searchBoxValueSub?.unsubscribe();
  }
}
