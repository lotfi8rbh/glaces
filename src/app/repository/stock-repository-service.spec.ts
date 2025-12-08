import { TestBed } from '@angular/core/testing';

import { StockRepositoryService } from './stock-repository-service';

describe('StockRepositoryService', () => {
  let service: StockRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
