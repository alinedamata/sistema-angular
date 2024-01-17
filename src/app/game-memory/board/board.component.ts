import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Card } from '../model/card';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(private gameService: GameService) { }

  cardCount: number = 6;
  cards: Card[] = [];
  boardWidth!: number;

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.gameService.getCards(this.cardCount).subscribe(r => { this.cards = r;  this.calulateWidth()});
  }

  calulateWidth(){
    this.boardWidth=this.cardCount/2*90;
  }
}
