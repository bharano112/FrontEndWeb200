import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShoppingListItem } from './models';
import { map } from 'rxjs/operators';

@Injectable()
export class ShoppingDataService {

  constructor(private httpClient: HttpClient) { }

  getShoppingList() {
    return this.httpClient.get<ShoppingResults>('http://localhost:3000/shopping')
      .pipe(
        map(r => r.data)
      );
  }
}

interface ShoppingResults {
  data: ShoppingListItem[];
}
