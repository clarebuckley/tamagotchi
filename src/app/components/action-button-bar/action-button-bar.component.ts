import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-button-bar',
  templateUrl: './action-button-bar.component.html',
  styleUrls: ['./action-button-bar.component.css']
})
export class ActionButtonBarComponent implements OnInit {

  @Output() buttonClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(buttonClicked: string){
    this.buttonClicked.emit(buttonClicked);
  }

}
