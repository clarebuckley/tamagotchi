import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITamagotchiStats } from 'src/app/interfaces/tamagotchi-stats.interface';
import { TamagotchiStatsService } from '../../../services/tamagotchi-stats.service'

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})
export class StartScreenComponent implements OnInit {

  constructor(private tamagotchiStatsService: TamagotchiStatsService) { }

  eggId: number = 1;
  isEggCracked: boolean = false;

  @Input() buttonClickedValue: Observable<string> = new Observable();

  state: ITamagotchiStats=   {
    age: 0,
    name: '',
    happiness: 0,
    hunger: 0,
    cleanliness: 0,
    hasPooped: false,
    isLightOn: false
  }

  ngOnInit(): void {
    this.buttonClickedValue.subscribe(val => {
      console.log(this.eggId)
      if (val === "enter" && !this.isEggCracked) {
        this.crackEgg();
      }
      if(val === "enter" && this.isEggCracked && this.state.name.length >0){
        this.state.age = 1;
        this.tamagotchiStatsService.updateStats(this.state);
      }
    })
  }

  crackEgg(){
    this.eggId++;
    if(this.eggId == 7){
      this.isEggCracked = true;
    }
  }

}
