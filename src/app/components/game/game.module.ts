import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './game.component';

@NgModule({
    declarations: [
        GameComponent
    ],
    imports: [ 
        CommonModule,
        FormsModule
     ],
    exports: [
        GameComponent
    ],
    providers: [],
})
export class GameModule {}