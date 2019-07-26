import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private gameButton: String = 'Proceed to the Game';
  constructor() { }

  goToGame() {
    console.log('entered');
  }

  ngOnInit() { }

}
