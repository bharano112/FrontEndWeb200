import { Component, OnInit } from '@angular/core';
import { State, selectAllTodoItems } from './reducers';
import { Store } from '@ngrx/store';
import { TodoItem } from './modles';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  items$: Observable<TodoItem[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.items$ = this.store.select(selectAllTodoItems);
  }

}
