import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BoardComponent } from "./board/board.component";
import { MemoryCardComponent } from "./memory-card/memory-card.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { MatDividerModule } from "@angular/material/divider";
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import {MatSelectModule} from '@angular/material/select';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    BoardComponent,
    MemoryCardComponent,
    NavbarComponent
  ],
  imports: [
   CommonModule,
   MatButtonModule,
   MatDividerModule,
   MatToolbarModule,
   MatIconModule,
   MatRadioModule,
   MatSelectModule,
   FormsModule,
   HttpClientModule,
  ],
  providers: [],
  exports: [
    BoardComponent,
    MemoryCardComponent,
    NavbarComponent
  ]
})
export class GameMemoryModule{}
