import { Injectable } from '@angular/core';
import categoryJson from "./categories.json";
import {  Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() {}

  getCategories(): Observable<{folder: string; id: number; name: string }[]> {
    return of(categoryJson);
  }
}
