import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gameButton = 'Proceed to the Game';
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  goToGame() {
    this.router.navigateByUrl('/game');
  }

  ngOnInit() { }

}
