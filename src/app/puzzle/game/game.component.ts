import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameDBService } from '../services/gamedb.service';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  readonly imagesPerCategory = 2; // essa é a quanditade de fotos pra cada categoria, como só tem uma imagem, então coloquei 1, depois vai alterando de acordo com a quantidade
  readonly secondsInAMinute = 60;
  private intervalId: any;
  private categoryId: number = -1;
  private seconds: number = 0;
  private subscription: Subject<void> = new Subject();
  folder: string = "";
  image: number = 0;
  over: boolean = false;
  time: string = '';
  moves: number = 0;
  fails: number = 0;

  constructor(private gamedb: GameDBService) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.next();
    this.subscription.complete();
  }

  refreshTimer(): void {
    this.intervalId = setInterval(() => {
      if (this.over){
        clearInterval(this.intervalId);
      }else{
        this.seconds++;
        let minutes = Math.floor(this.seconds / this.secondsInAMinute);
        let seconds = this.seconds % this.secondsInAMinute + 's';
        this.time =  minutes ? minutes + 'm '  + seconds : seconds;
      }
    }, 1000);
  }

  reset(): void {
    this.moves = 0
    this.fails = 0;
    this.over = false;
    this.seconds = 0;
    if (this.intervalId){
      clearInterval(this.intervalId);
    }
    this.refreshTimer();
  }

  onCategoryChange(category: { categoryId: number; folder: string; }): void {
   this.categoryId = category.categoryId;
   this.folder = category.folder;
   this.reset();
   this.image = Math.floor(Math.random() * this.imagesPerCategory);
  }

  onImageChange(image: number): void {
    this.image = image;
    this.reset();
  }

  onStatsChange(objet:any): void {
    this.moves = objet.moves;
    this.fails = objet.fails;
    this.over = objet.over;
    this.save();
  }

  save(): void {
    if (this.over) {
        this.gamedb.save({
          categoryId: this.categoryId,
          folder: this.folder,
          image: this.image,
          time: this.time,
          moves: this.moves,
          fails: this.fails
        })
    }
  }

}
