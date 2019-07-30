import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants/constants';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  frequency: number;
  gameNumber: string;
  interval: any;
  numAndFrequency: Map<number, number> = new Map();
  isFrequencyInputDisabled = false;
  sortedMap: Map<number, number>;
  isResumeDisabled = true;

  toast: ToastrService;
  router: Router;

  isPerfectSquare(x: number) {
    const s: number = Math.sqrt(x);
    if (!Number.isInteger(s)) {
      return false;
    }
    return (s * s === x);
  }

  constructor(toast: ToastrService, router: Router) {
    this.toast = toast;
    this.router = router;
  }

  enterFrequency(): void {
      if (this.frequency === null || this.frequency === undefined || isNaN(this.frequency) || this.frequency.toString().length === 0) {
        this.toast.error('Please enter a valid frequency');
      } else {
        this.isFrequencyInputDisabled = true;
        this.interval = setInterval(() => {

          if (this.numAndFrequency !== null || this.numAndFrequency !== undefined) {
            if (this.numAndFrequency.size === 0) {
              this.toast.error('No number has been entered');
            } else {
              this.transformMapToString(this.sortedMap);
            }
          } else {
            this.toast.error('Enter a valid frequency');
          }
        }, this.frequency * 1000);
      }
  }

  resume(): void {
    this.isResumeDisabled = true;
    this.enterFrequency();
  }

  enterNumber(): void {
      if (!isNaN(parseInt(this.gameNumber, 10))) {
        if (this.numAndFrequency.has(parseInt(this.gameNumber, 10))) {
          this.numAndFrequency.set(parseInt(this.gameNumber, 10), this.numAndFrequency.get(parseInt(this.gameNumber, 10)) + 1);
        } else {
          this.numAndFrequency.set(parseInt(this.gameNumber, 10), 1);
        }

        this.sortedMap = new Map([...this.numAndFrequency.entries()].sort((a, b) => b[1] - a[1]));

        if (this.isFibo(parseInt(this.gameNumber, 10))) {
          if (parseInt(this.gameNumber, 10) < 1000) {
            this.toast.success('FIB');
          }
        }
        this.gameNumber = null;
      } else {
        this.toast.error('Enter a valid number');
      }
  }

  transformMapToString(map: Map<number, number>) {

    const arrayFromMap = Array.from(map);
    let s = '';
    arrayFromMap.forEach(a => {
      s += (a[0] + ': ' + a[1] + ', ');
    });
    this.toast.success(s.slice(0, s.length - 2));

  }

  isFibo(num: number) {
      return (this.isPerfectSquare(5 * num * num + 4) || this.isPerfectSquare(5 * num * num - 4));
    }

  halt() {
    clearInterval(this.interval);
    this.isResumeDisabled = false;
  }

  resetGame() {
    clearInterval(this.interval);
    this.isFrequencyInputDisabled = false;
    this.gameNumber = null;
    this.numAndFrequency = new Map();
    this.frequency = null;
  }

  quit() {
    this.halt();
    if (this.sortedMap === null || this.sortedMap === undefined) {
      this.toast.error('Please play the game before you quit!!');
    } else {
      this.router.navigate(['thank-you'], {state: {numbersAndFrequency: this.sortedMap}});
    }
  }

  ngOnInit() { }
}
