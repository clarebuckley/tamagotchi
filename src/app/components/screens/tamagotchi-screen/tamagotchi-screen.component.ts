import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITamagotchiStats } from '../../../interfaces/tamagotchi-stats.interface';
import { TamagotchiStatsService } from '../../../services/tamagotchi-stats-service/tamagotchi-stats.service';
import { Screen } from '../../../enums/screen.enum';

@Component({
  selector: 'app-tamagotchi-screen',
  templateUrl: './tamagotchi-screen.component.html',
  styleUrls: ['./tamagotchi-screen.component.css']
})
export class TamagotchiScreenComponent implements OnInit {

  stats: Observable<ITamagotchiStats> = this.tamagotchiStatsService.stats$;
  screen: Observable<Screen> = this.tamagotchiStatsService.screen$;

  constructor(private tamagotchiStatsService: TamagotchiStatsService) { }

  ngOnInit(): void {

  }

}
