import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITamagotchiStats } from 'src/app/interfaces/tamagotchi-stats.interface';
import { TamagotchiStatsService } from '../../../services/tamagotchi-stats-service/tamagotchi-stats.service'

@Component({
  selector: 'app-stats-screen',
  templateUrl: './stats-screen.component.html',
  styleUrls: ['./stats-screen.component.css']
})
export class StatsScreenComponent implements OnInit {

  constructor(public tamagotchiStatsService: TamagotchiStatsService) { }

  stats: Observable<ITamagotchiStats> = this.tamagotchiStatsService.stats$;

  ngOnInit(): void {
    this.stats.pipe()
  }

}
