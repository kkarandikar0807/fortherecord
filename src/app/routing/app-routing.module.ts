import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { GameComponent } from '../components/game/game.component';
import { ThankYouComponent } from '../components/thank-you/thank-you.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'game',
  component: GameComponent
}, {
  path: 'thank-you',
  component: ThankYouComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
