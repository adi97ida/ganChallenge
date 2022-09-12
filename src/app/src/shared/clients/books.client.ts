import { Injectable } from '@angular/core';
import {from, of, scheduled} from "rxjs";
import {Book} from "../models/books.model";
import { faker } from '@faker-js/faker';

@Injectable({
  providedIn: 'root'
})
export class BooksClient {
  private mockBooks: Book[] = [];

  constructor() {

    let i = 10;
    while(i) {
      this.mockBooks.push({
        id: faker.database.mongodbObjectId(),
        author: `${faker.name.firstName()} ${faker.name.lastName()}`,
        addedAt: faker.date.recent(),
        description: faker.lorem.lines(100),
        image: faker.image.cats(),
        name: faker.music.songName(),
        tags: `${faker.music.genre()}, ${faker.music.genre()}, ${faker.music.genre()}`,
        year: faker.date.between('2020-01-01T00:00:00.000Z', '2022-08-08T00:00:00.000Z').getFullYear().toString()
      })

      i -= 1;
    }
  }

  getBooks() {
    return of(this.mockBooks);
  }

  getLatestBooks(start: number, end: number) {
    const sortedBooks = this.mockBooks.slice().sort((a,b) => {
      return Number(b.addedAt) - Number(a.addedAt);
    })

    return of(sortedBooks.slice(start, end));
  }
}
