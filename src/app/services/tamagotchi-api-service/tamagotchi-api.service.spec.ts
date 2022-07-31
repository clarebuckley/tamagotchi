import { TestBed } from '@angular/core/testing';

import { TamagotchiApiService } from './tamagotchi-api.service';

describe('TamagotchiApiService', () => {
  let service: TamagotchiApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TamagotchiApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
