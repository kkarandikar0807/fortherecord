import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { GameComponent } from './game.component';
import {ToastrModule} from 'ngx-toastr';
import {RouterTestingModule} from '@angular/router/testing';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent ],
      imports: [
        FormsModule,
        ToastrModule.forRoot(),
        RouterTestingModule
      ],
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

  it ('should return true for fibo numbers and false for non-fibo', () => {
    expect(component.isFibo(5)).toBeTruthy();
    expect(component.isFibo(6)).toBeFalsy();
    expect(component.isFibo(13)).toBeTruthy();
    expect(component.isFibo(14)).toBeFalsy();
  });

  it('should return true for a perfect square and false for non-perfect square', () => {
    expect(component.isPerfectSquare(4)).toBeTruthy();
    expect(component.isPerfectSquare(5)).toBeFalsy();
  });
});
