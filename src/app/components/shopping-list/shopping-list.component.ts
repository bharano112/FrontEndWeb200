import { Component, OnInit } from '@angular/core';
import { ShoppingListItem } from './models';
import { ShoppingDataService } from './shopping-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  // this is a shared array.
  // this array is an input to the list.component
  // items: ShoppingListItem[] = [
  //   { id: 1, description: 'Hair Gel', purchased: true },
  //   { id: 2, description: 'toothpaste', purchased: false }
  // ];

  items$: Observable<ShoppingListItem[]>;
  nextId = 3;

  constructor(private apiService: ShoppingDataService) { }

  ngOnInit() {
    this.items$ = this.apiService.getShoppingList();
  }

  // This function is called by the entry component when
  // the user adds an item to the list the entry component
  // emits an event as an output
  onItemAdded(description: string) {
    // this.items = [
    //   {
    //     id: this.nextId++,
    //     description,
    //     purchased: false
    //   },
    //   ...this.items];
    // TODO: add this through the api.
  }

}
