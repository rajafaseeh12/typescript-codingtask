import { TestBed } from '@angular/core/testing';

import { GetTopArtistsService } from './get-top-artists.service';

describe('GetTopArtistsService', () => {
  let service: GetTopArtistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTopArtistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
