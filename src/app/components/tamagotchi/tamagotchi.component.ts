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
      console.log("do something");
    }
  }

}
