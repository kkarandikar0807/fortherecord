import { Component, OnInit } from '@angular/core';
import { KeyboardHelper } from 'src/app/helpers/keyboard.helper';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private numberOfSeconds: number;
  private gameNumber: number;
  private interval: any;
  private numAndFrequency: Map<number, number> = new Map();

  constructor() { }

  private onPressKey(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.display();
    }
  }

  private isPerfectSquare(x: number) {
    let s: number = Math.sqrt(x);
    return (s*s === x);
  }

  private display() {
    if (this.numberOfSeconds !== undefined) {
      this.interval = setInterval(() => {
        console.log('interval');
        
      }, this.numberOfSeconds * 1000);
    }
  }

  private processGame(event: KeyboardEvent) {
    if (KeyboardHelper.isEnterPressed(event)) {
      if (this.numAndFrequency.has(this.gameNumber)) {
        this.numAndFrequency.set(this.gameNumber, this.numAndFrequency.get(this.gameNumber) + 1);
      } else {
        this.numAndFrequency.set(this.gameNumber, 1);
      }
      console.log(this.numAndFrequency);
    } else {
      if (!isNaN(parseInt(event.key))) {
        
        this.gameNumber = parseInt(event.key);
        console.log(this.gameNumber);
      } else {
        throwError("Please add a number");
      }
      
    }
  }

  private halt() {
    clearInterval(this.interval);
  }

  private isFibo(num: number) {
    return this.isPerfectSquare(5*num*num + 4) || this.isPerfectSquare(5*num*num -4);
  }

  ngOnInit() { }
}
