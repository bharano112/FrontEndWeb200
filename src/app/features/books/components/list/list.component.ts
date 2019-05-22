import { Component, OnInit, Input } from '@angular/core';
import { BookItem } from '../../modles';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { LoanBook } from '../../actions/books.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() books: BookItem[] = [];
  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  loan(book) {
    if (book) {
      this.store.dispatch(
        new LoanBook(book.title, book.author, book.format, book.id));
    }
  }
}
