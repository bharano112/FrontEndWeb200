import { Component, OnInit, Input } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { BookItem } from '../../modles';
import { Store } from '@ngrx/store';
import { State, selectAllOnLoanBookItems } from '../../reducers';

@Component({
  selector: 'app-onloan',
  templateUrl: './onloan.component.html',
  styleUrls: ['./onloan.component.css']
})
export class OnloanComponent implements OnInit {

  // itemsloaned$: Observable<BookItem[]>;

  @Input() loaned: BookItem[] = [];
  constructor(private store: Store<State>) { }

  ngOnInit() {

  }


  loan(event) {
    if (event !== null) {

    }
  }
}
