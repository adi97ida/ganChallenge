import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './src/components/root/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './src/components/landing/landing.component';
import { BooksComponent } from './src/components/books/books.component';
import { BookCardViewComponent } from './src/shared/components/book-card-view/book-card-view.component';
import { BookExpandedViewComponent } from './src/shared/dialogs/book-expanded-view/book-expanded-view.component';
import { RootHeaderComponent } from './src/components/root/header/root-header.component';
import { NavigationComponent } from './src/components/root/header/navigation/navigation.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { TruncatePipe } from './src/shared/pipes/truncate.pipe';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BooksComponent,
    BookCardViewComponent,
    BookExpandedViewComponent,
    RootHeaderComponent,
    NavigationComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatDialogModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
