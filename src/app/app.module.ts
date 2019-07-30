import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { GameModule } from './components/game/game.module';
import { ToastrModule } from 'ngx-toastr';
import {TooltipModule} from 'ng2-tooltip-directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GameModule,
    TooltipModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
