import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITamagotchiStats } from '../../interfaces/tamagotchi-stats.interface';
import { Screen } from '../../enums/screen.enum';

@Injectable({
  providedIn: 'root'
})


export class TamagotchiStatsService {

  // Write to source only through specified store methods below
  private readonly _statsSource = new BehaviorSubject<ITamagotchiStats>({
    age: -1,
    name: '',
    happiness: 0,
    hunger: 0,
    cleanliness: 0,
    hasPooped: false,
    isLightOn: true
  });

  private readonly _screenSource = new BehaviorSubject<Screen>(Screen.StartScreen);

  // Exposed observables (read-only).
  readonly stats$ = this._statsSource.asObservable();
  readonly screen$ = this._screenSource.asObservable();

  constructor() { }

  // Get last value without subscribing to the observable (synchronously).
  getStats(): ITamagotchiStats {
    return this._statsSource.getValue();
  }

  getScreen(): Screen {
    return this._screenSource.getValue();
  }

  updateStats(stats: ITamagotchiStats): void {
    this._statsSource.next(stats);
  }

  updateScreen(newScreen: Screen): void {
    this._screenSource.next(newScreen)
  }

  //Specific tamagotchi state methods
  toggleLight() {
    const toUpdate = this.getStats();
    toUpdate.isLightOn = !toUpdate.isLightOn;
    this.updateStats(toUpdate)
  }

  setHasPooped(hasPooped: boolean) {
    const toUpdate = this.getStats();
    toUpdate.hasPooped = hasPooped;
    this.updateStats(toUpdate)
  }
}
