import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { CategoryComponent } from "./category/category.component";
import { GameComponent } from "./game/game.component";
import { ImageComponent } from "./image/image.component";
import { StatsComponent } from "./stats/stats.component";
import { BoardGameComponent } from "./board/board.component";


@NgModule({
  declarations: [
    BoardGameComponent,
    CategoryComponent,
    GameComponent,
    ImageComponent,
    StatsComponent
  ],
  imports: [
   CommonModule,
   MatButtonModule,
   MatDividerModule,
   MatToolbarModule,
   MatIconModule,
   MatRadioModule,
   FormsModule,
   HttpClientModule,
  ],
  providers: [],
  exports: [
    BoardGameComponent,
    CategoryComponent,
    GameComponent,
    ImageComponent,
    StatsComponent
  ]
})
export class PuzzleModule{}
