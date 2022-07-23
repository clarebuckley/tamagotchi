import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tamagotchi-app';
  buttonClickedValue: Subject<string> = new Subject<string>()//string = "";


  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(name: string){
    this.buttonClickedValue.next(name);
  }
}
