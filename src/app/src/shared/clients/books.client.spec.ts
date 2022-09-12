import { TestBed } from '@angular/core/testing';

import { Books.ClientService } from './books.client.service';

describe('Books.ClientService', () => {
  let service: Books.ClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Books.ClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
