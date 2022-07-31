import { TestBed } from '@angular/core/testing';

import { TamagotchiStatsService } from './tamagotchi-stats.service';

describe('TamagotchiStatsService', () => {
  let service: TamagotchiStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TamagotchiStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
