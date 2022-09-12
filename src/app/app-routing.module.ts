import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LandingComponent} from "./src/components/landing/landing.component";
import {BooksComponent} from "./src/components/books/books.component";

const routes: Routes = [
  { path: 'landing', component: LandingComponent, children: [] },
  { path: 'books', component: BooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
