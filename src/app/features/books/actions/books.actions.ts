import { Action } from '@ngrx/store';

let maxId = 99;

export const BOOK_ADDED = '[books] book added';
export class AddedBook implements Action {
  readonly type = BOOK_ADDED;
  id: string;
  title: string;
  author: string;
  format: string;
  onLoan: boolean;

  constructor(public titleIn: string, author: string, format: string) {
    this.id = 'T' + (maxId++).toString();
    this.title = titleIn;
    this.author = author;
    this.format = format;
    this.onLoan = false;
  }
}

export const LOAN_BOOK = '[books] book loaned';
export class LoanBook implements Action {
  readonly type = LOAN_BOOK;
  id: string;
  title: string;
  author: string;
  format: string;
  onLoan: boolean;

  constructor(public titleIn: string, author: string, format: string, id: string) {
    this.id = id;
    this.title = titleIn;
    this.author = author;
    this.format = format;
    this.onLoan = true;
  }
}

export type ALL = LoanBook | AddedBook;
