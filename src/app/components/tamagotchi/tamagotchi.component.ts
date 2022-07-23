import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-tamagotchi',
  templateUrl: './tamagotchi.component.html',
  styleUrls: ['./tamagotchi.component.css']
})
export class TamagotchiComponent implements OnInit {

  constructor() { }

  @Input() buttonClickedValue: Observable<string> = new Observable();
  selectedButtonOption: number = -1;
  selectedButtonOptionText: string = '';
  buttonOptions = ['feed', 'light', 'game', 'medic', 'bathe', 'stats', 'discipline', 'social'];
  isLightOn = true;


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
          this.isLightOn = !this.isLightOn;
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
          //statements;
          break;
        }
        case "stats": {
          //statements;
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
          //statements;
          break;
        }
      }
    }
  }
}


