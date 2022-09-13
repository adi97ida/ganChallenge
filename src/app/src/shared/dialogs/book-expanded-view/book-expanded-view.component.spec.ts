import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookExpandedViewComponent } from './book-expanded-view.component';

describe('BookExpandedViewComponent', () => {
  let component: BookExpandedViewComponent;
  let fixture: ComponentFixture<BookExpandedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookExpandedViewComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookExpandedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
