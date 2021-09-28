import { TestBed } from '@angular/core/testing';

import { GetArtistByCountryService } from './get-artist-by-country.service';

describe('GetArtistByCountryService', () => {
  let service: GetArtistByCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetArtistByCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
