import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true if number is a fibo sequence number, and false if it isn\'t', () => {
    expect(component.isFibo(8)).toBeTruthy();
    expect(component.isFibo(7)).toBeFalsy();
  });

  it('should return true if given number is a perfect square', () => {
    expect(component.isPerfectSquare(4)).toBeTruthy();
    expect(component.isPerfectSquare(5)).toBeFalsy();
    expect(component.isPerfectSquare(89)).toBeFalsy();
  })
});
