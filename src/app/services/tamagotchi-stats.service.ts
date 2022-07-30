import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITamagotchiStats } from '../interfaces/tamagotchi-stats.interface';

@Injectable({
  providedIn: 'root'
})
export class TamagotchiStatsService {

  // Write to _statsSource only through specified store methods below.
  private readonly _statsSource = new BehaviorSubject<ITamagotchiStats>({
    age: -1,
    name: '',
    happiness: 0,
    hunger: 0,
    cleanliness: 0,
    hasPooped: false,
    isLightOn: true
  });

  // Exposed observable (read-only).
  readonly stats$ = this._statsSource.asObservable();

  constructor() {}

  // Get last value without subscribing to the stats$ observable (synchronously).
  getStats(): ITamagotchiStats {
    return this._statsSource.getValue();
  }

  updateStats(stats: ITamagotchiStats): void {
    this._statsSource.next(stats);
  }

  toggleLight(){
    const toUpdate = this.getStats();
    toUpdate.isLightOn = !toUpdate.isLightOn;
    this.updateStats(toUpdate)
  }

  setHasPooped(hasPooped: boolean){
    const toUpdate = this.getStats();
    toUpdate.hasPooped = hasPooped;
    this.updateStats(toUpdate)
  }

 /* addStat(stat: ITamagotchiStats): void {
    const stats = [...this.getStats(), stat];
    this._setStats(stats);
  }

 /* removeStat(stat: ITamagotchiStats): void {
    const stats = this.getStats().filter(p => p.id !== stat.id);
    this._setStats(stats);
  }

  adoptstat(stat: ITamagotchiStats): void {
    const stats = this.getStats().map(p =>
      p.id === stat.id ? new stat({ ...p, ...{ adopted: true } }) : p
    );
    this._setStats(stats);
  }*/
}
