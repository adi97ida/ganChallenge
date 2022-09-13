import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';
import { Subscription, debounceTime, distinctUntilChanged, take } from 'rxjs';
import { Book } from '../../shared/models/books.model';
import { UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../../shared/services/search.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit, OnDestroy {
  public searchFormControl: UntypedFormControl = new UntypedFormControl();
  public lastAddedBooks: Book[] = [];
  public searchResults: Book[] = [];
  public isSearching: boolean = false;

  private subs: Subscription[] = [];
  constructor(
    public booksService: BooksService,
    private searchService: SearchService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadLastAddedBooks();
    this.checkForRouteParams(true);
  }

  ngAfterViewInit(): void {
    this.watchForSearchValueChanges();
  }

  private loadLastAddedBooks() {
    this.booksService
      .getLatestBooks()
      .pipe(take(1))
      .subscribe((lastBooks) => {
        this.lastAddedBooks = lastBooks;
      });
  }

  private watchForSearchValueChanges() {
    this.subs.push(
      this.searchFormControl.valueChanges
        .pipe(debounceTime(500), distinctUntilChanged())
        .subscribe(async (val) => {
          if (val) {
            await this.router.navigate([], {
              queryParams: { keywords: val },
              relativeTo: this.route
            });
            this.isSearching = true;
          } else {
            await this.router.navigate(['/'], { relativeTo: this.route });
            this.isSearching = false;
          }
        })
    );
  }

  private checkForRouteParams(isViewFirstLoad: boolean = false) {
    this.route.queryParams.subscribe((params) => {
      if (params['keywords']) {
        const searchString = params['keywords'];

        const foundBooks = this.searchService.returnFoundBooks(searchString);

        if (foundBooks) {
          this.searchResults = foundBooks;
        } else {
          this.searchResults = [];
        }

        if (isViewFirstLoad) {
          this.searchFormControl.setValue(searchString);
          this.isSearching = true;
        }
      }
    });
  }
  ngOnDestroy(): void {
    this.subs.forEach((sub) => {
      if (!sub.closed) {
        sub.unsubscribe();
      }
    });
  }
}
