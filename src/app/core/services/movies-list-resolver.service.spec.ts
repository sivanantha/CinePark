import { TestBed } from '@angular/core/testing';

import { MoviesListResolverService } from './movies-list-resolver.service';

describe('MoviesListResolverService', () => {
  let service: MoviesListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
