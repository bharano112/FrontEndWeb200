import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { State, selectAllBookItems, selectAllOnLoanBookItems } from './reducers'; //
import { Store } from '@ngrx/store';
import { BookItem } from './modles';
import { Dictionary } from '@ngrx/entity';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  items$: Observable<BookItem[]>;
  itemsloaned$: Observable<BookItem[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.items$ = this.store.select(selectAllBookItems);
    this.itemsloaned$ = this.store.select(selectAllOnLoanBookItems);
  }

}
