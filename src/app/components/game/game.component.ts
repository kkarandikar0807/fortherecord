import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants/constants';
import { ToastrService } from 'ngx-toastr';

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
  private fibo: number[] = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

  private toast: ToastrService;

  constructor(toast: ToastrService) {
    this.toast = toast;
  }

  enterFrequency(): void {
    if (this.frequency !== undefined && !isNaN(this.frequency)) {
      this.interval = setInterval(() => {
        console.log('interval');
        
        if (this.numAndFrequency.size === 0) {
          this.toast.error('No number has been entered');
        } else {
          this.toast.success(this.numAndFrequency.keys.toString(), this.numAndFrequency.values.toString());
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

  resume(): void {
    if (this.gameNumber === Constants.resume) {
      this.enterFrequency();
    }
  }

  enterNumber(): void {
      console.log(parseInt(this.gameNumber));
    if (this.numAndFrequency.has(parseInt(this.gameNumber))) {
      this.numAndFrequency.set(parseInt(this.gameNumber), this.numAndFrequency.get(parseInt(this.gameNumber)) + 1);
    } else {
      this.numAndFrequency.set(parseInt(this.gameNumber), 1);
    }

    if (this.fibo.includes(parseInt(this.gameNumber, 10))) {
      this.toast.success('FIB');
    }
  }

  halt() {
    clearInterval(this.interval);
  }

  ngOnInit() { }
}