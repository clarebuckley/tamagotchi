import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITamagotchiStats } from '../../../interfaces/tamagotchi-stats.interface';
import { TamagotchiStatsService } from '../../../services/tamagotchi-stats.service'

@Component({
  selector: 'app-tamagotchi-screen',
  templateUrl: './tamagotchi-screen.component.html',
  styleUrls: ['./tamagotchi-screen.component.css']
})
export class TamagotchiScreenComponent implements OnInit {

  statsValue: ITamagotchiStats = {
    age: 0,
    name: '',
    happiness: 0,
    hunger: 0,
    cleanliness: 0,
    hasPooped: false,
    isLightOn: false
  }

  stats: Observable<ITamagotchiStats> = this.tamagotchiStatsService.stats$;

  constructor(private tamagotchiStatsService: TamagotchiStatsService) { }

  ngOnInit(): void {
    console.log(this.stats)
    this.stats.subscribe(value => this.statsValue = value)

  }

}
