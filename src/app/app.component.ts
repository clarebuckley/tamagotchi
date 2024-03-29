import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tamagotchi-app';
  isAuthenticated: boolean = false;

  buttonClickedValue: Subject<string> = new Subject<string>()


  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(name: string){
    this.buttonClickedValue.next(name);
  }
}
