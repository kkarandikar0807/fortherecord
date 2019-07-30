import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {

  finalOutput: any;

  constructor(router: Router) {
    if (router.getCurrentNavigation() !== null) {
      this.transformMapToString(router.getCurrentNavigation().extras.state.numbersAndFrequency);
    }

  }

  transformMapToString(map: any) {

    const arrayFromMap = Array.from(map);
    let s = '';
    arrayFromMap.forEach(a => {
      s += ('Number entererd: - ' + a[0] + ',' + 'Frequency: - ' + a[1] + ', ');
    });
    this.finalOutput = s.slice(0, s.length - 2);
  }

  ngOnInit() {
  }
}
