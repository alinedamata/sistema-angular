import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { GameService } from '../services/game.service';


@Component({
  selector: 'memory-card',
  templateUrl: './memory-card.component.html',
  styleUrls: ['./memory-card.component.scss']
})
export class MemoryCardComponent implements OnInit, DoCheck {
  @Input() photo!: string;
  @Input() id!: number;

  constructor(private gameService: GameService) { }

  isRotated!: boolean;

  ngOnInit(): void {
    this.gameService.getCoveredCards().subscribe(r=>r.map(v=>this.isRotated=(v.id==this.id)?false:this.isRotated));
  }

  ngDoCheck(): void {
  }

  undo() {
    this.isRotated = false;
  }

  onClick() {
    this.isRotated = true;
    this.gameService.controlCards({ id: this.id, photo: this.photo });
  }

}
