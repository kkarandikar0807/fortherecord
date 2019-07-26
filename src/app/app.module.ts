import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { GameModule } from './components/game/game.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    GameModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
