import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Subject, takeUntil } from 'rxjs';

export interface Categoria {
  folder: string
  id: number
  name: string
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit, OnDestroy {
  private subscriptio: Subject<void> = new Subject();
  categories: Categoria[] = [];
  categoryId!: number;
  folder: string
  @Output() categoryChange = new EventEmitter();

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().pipe(takeUntil(this.subscriptio)).subscribe((dataCategories: any[]) => {
        let categories = [];
        for (let i = 0; i < dataCategories.length; i++) {
          categories.push({
            id: dataCategories[i].id,
            name: dataCategories[i].name,
            folder: dataCategories[i].folder});
        }
        this.categories = categories;
        const categoriaSelecionada: Categoria = this.categories[Math.floor(Math.random() * this.categories.length)];
        this.categoryId = categoriaSelecionada.id;
        this.folder = categoriaSelecionada.folder;
        this.emitCategory();
    });
  }

  ngOnDestroy(): void {
    this.subscriptio.next();
    this.subscriptio.complete();
  }

  emitCategory() {
    this.categoryChange.emit({ categoryId: this.categoryId, folder: this.folder });
  }

  onChange(event:any): void {
    this.categoryId = Number(event.target.value);
    this.folder = this.categories.find((categoria: Categoria) => categoria.id === this.categoryId).folder
    this.emitCategory();
  }
}
