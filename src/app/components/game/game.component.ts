import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants/constants';
import { ToastrService } from 'ngx-toastr';

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

  toast: ToastrService;

  isPerfectSquare(x: number) {
    const s: number = Math.sqrt(x);
    if (!Number.isInteger(s)) {
      return false;
    }
    return (s * s === x);
  }

  constructor(toast: ToastrService) {
    this.toast = toast;
  }

  enterFrequency(): void {
    if (this.frequency === undefined || isNaN(this.frequency) || this.frequency.toString().length === 0) {
      this.frequency = null;
      this.toast.error('Please enter a valid frequency');
    } else {
      this.isFrequencyInputDisabled = true;
      this.interval = setInterval(() => {

        if (this.numAndFrequency.size === 0) {
          this.toast.error('No number has been entered');
        } else {
          this.toast.success(this.numAndFrequency.keys.toString(), this.numAndFrequency.values.toString());
        }
      }, this.frequency * 1000);
    }
  }

  resume(): void {
    if (this.gameNumber === Constants.resume) {
      this.enterFrequency();
    }
  }

  enterNumber(): void {
      console.log(parseInt(this.gameNumber, 10));
      if (this.numAndFrequency.has(parseInt(this.gameNumber, 10))) {
      this.numAndFrequency.set(parseInt(this.gameNumber, 10), this.numAndFrequency.get(parseInt(this.gameNumber, 10)) + 1);
    } else {
      this.numAndFrequency.set(parseInt(this.gameNumber, 10), 1);
    }

      if (this.isFibo(parseInt(this.gameNumber, 10))) {
      this.toast.success('FIB');
    }
  }


  private isFibo(num: number) {
      return (this.isPerfectSquare(5 * num * num + 4) || this.isPerfectSquare(5 * num * num - 4));
    }

  halt() {
    clearInterval(this.interval);
  }

  resetGame() {
    clearInterval(this.interval);
    this.isFrequencyInputDisabled = false;
    this.gameNumber = null;
    this.numAndFrequency = null;
    this.frequency = null;
  }

  ngOnInit() { }
}
