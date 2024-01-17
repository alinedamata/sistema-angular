import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit, OnChanges {
  readonly imagesPerCategory = 2 // essa é a quanditade de fotos pra cada categoria, como só tem uma imagem, então coloquei 1, depois vai alterando de acordo com a quantidade
  @Input() folder!: string;
  @Input() image!: any;
  @Output() imageChange = new EventEmitter();
  path: string = '';

  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  refreshImage(): void {
    let image = this.randomImage();
    this.image = image;
    this.imageChange.emit(image + '');
  }

  private randomImage() {
    let image = Math.floor(Math.random() * this.imagesPerCategory);
    while ( image === this.image ){
      image = Math.floor(Math.random() * this.imagesPerCategory);
    }
    return image;
  }
}
