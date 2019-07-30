import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants/constants';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private frequency: number;
  private gameNumber: string;
  private interval: any;
  private numAndFrequency: Map<number, number> = new Map();

  constructor() {}

  private isPerfectSquare(x: number) {
    const s: number = Math.sqrt(x);
    return (s * s === x);
  }

  private enterFrequency(): void {
    if (this.frequency !== undefined && !isNaN(this.frequency)) {
      this.interval = setInterval(() => {
        console.log('interval');
        if (this.numAndFrequency.size === 0) {
          console.log('No number has been entered');
        }
        console.log(this.gameNumber);
        if (this.gameNumber.toLowerCase() === Constants.halt) {
          this.halt();
        }
        console.log(this.numAndFrequency);
      }, this.frequency * 1000);
    } else {
      console.log('enter a number');
    }
  }

  private resume(): void {
    if (this.gameNumber === Constants.resume) {
      this.enterFrequency();
    }
  }

  private enterNumber(): void {
      console.log(parseInt(this.gameNumber, 10));
      if (this.numAndFrequency.has(parseInt(this.gameNumber, 10))) {
      this.numAndFrequency.set(parseInt(this.gameNumber, 10), this.numAndFrequency.get(parseInt(this.gameNumber, 10)) + 1);
    } else {
      this.numAndFrequency.set(parseInt(this.gameNumber, 10), 1);
    }
  }

  private halt() {
    clearInterval(this.interval);
  }

  private isFibo(num: number) {

    return this.isPerfectSquare(5 * num * num + 4) || this.isPerfectSquare(5 * num * num - 4);
  }

  ngOnInit() { }
}
