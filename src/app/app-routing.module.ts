import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './src/components/landing/landing.component';
import { BooksComponent } from './src/components/books/books.component';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent,
    children: [
      {
        path: ':keywords',
        component: LandingComponent
      }
    ]
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
