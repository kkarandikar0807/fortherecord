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
    console.log(arrayFromMap);
    let s = '';
    arrayFromMap.forEach(a => {
      console.log(a[0], a[1]);
      s += ('Number entererd: - ' + a[0] + ',' + 'Frequency: - ' + a[1] + ', ');
    });
    this.finalOutput = s.slice(0, s.length - 2);
  }

  ngOnInit() {
  }
}
