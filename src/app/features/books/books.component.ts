import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { State, selectAllBookItems } from './reducers';
import { Store } from '@ngrx/store';
import { BookItem } from './modles';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  items$: Observable<BookItem[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.items$ = this.store.select(selectAllBookItems);
  }

}
