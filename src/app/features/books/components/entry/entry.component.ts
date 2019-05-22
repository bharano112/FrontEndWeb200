import { Component, OnInit, } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { AddedBook } from '../../actions/books.actions';
import { BookItem } from '../../modles';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  model: BookItem;
  maxId = 99;


  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.model = new BookItem('', '', '', false, 'Hardcover');
  }

  add() {
    this.store.dispatch(
      new AddedBook(this.model.title, this.model.author, this.model.format));
    // this.store.dispatch(new AddedTask(task));
    // item.value = '';
    // item.focus();
  }

}
