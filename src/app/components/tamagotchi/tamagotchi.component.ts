import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITamagotchiStats } from '../../interfaces/tamagotchi-stats.interface';
import { TamagotchiStatsService } from '../../services/tamagotchi-stats.service';
import { Screen } from '../../enums/Screen.enum';

@Component({
  selector: 'app-tamagotchi',
  templateUrl: './tamagotchi.component.html',
  styleUrls: ['./tamagotchi.component.css']
})
export class TamagotchiComponent implements OnInit {

  constructor(public tamagotchiStatsService: TamagotchiStatsService) { }

  @Input() buttonClickedValue: Observable<string> = new Observable();
  stats: Observable<ITamagotchiStats> = this.tamagotchiStatsService.stats$;
  screen: Observable<Screen> = this.tamagotchiStatsService.screen$;

  selectedButtonOption: number = -1;
  selectedButtonOptionText: string = '';
  buttonOptions = ['feed', 'light', 'game', 'medic', 'bathe', 'stats', 'discipline', 'social'];

  ngOnInit(): void {
    this.buttonClickedValue.subscribe((value) => this.changeSelection(value));
  }

  changeSelection(value: any) {
    if (value === "right") {
      if (this.selectedButtonOption != 7) {
        this.selectedButtonOption++;
      } else {
        this.selectedButtonOption = -1
      }
      this.selectedButtonOptionText = this.buttonOptions[this.selectedButtonOption];
    }
    if (value == "left") {
      if (this.selectedButtonOption > 0) {
        this.selectedButtonOption--;
      } else {
        this.selectedButtonOption = -1
      }
      this.selectedButtonOptionText = this.buttonOptions[this.selectedButtonOption];
    }

    if (value == "enter") {
      switch (this.selectedButtonOptionText) {
        case "feed": {
          //statements;
          break;
        }
        case "light": {
          this.tamagotchiStatsService.toggleLight();
          break;
        }
        case "game": {
          //statements;
          break;
        }
        case "medic": {
          //statements;
          break;
        }
        case "bathe": {
          this.tamagotchiStatsService.setHasPooped(false);
          break;
        }
        case "stats": {
          this.tamagotchiStatsService.updateScreen(Screen.StatisticsScreen)
          break;
        }
        case "discipline": {
          //statements;
          break;
        }
        case "social": {
          //statements;
          break;
        }
        default: {
          break;
        }
      }
    }
  }
}


