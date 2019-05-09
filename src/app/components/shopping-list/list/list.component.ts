import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListItem } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() shoppingItems: ShoppingListItem[];

  @Input() heading = 'Your Shopping List';

  constructor() { }

  ngOnInit() {
  }

  markPurchased(item: ShoppingListItem) {
    item.purchased = true;
  }

}
