import { Action } from '@ngrx/store';

let maxId = 99;

export const BOOK_ADDED = '[books] book added';
export class AddedBook implements Action {
  readonly type = BOOK_ADDED;
  id: string;
  title: string;
  author: string;
  format: string;

  constructor(public titleIn: string, author: string, format: string) {
    this.id = 'T' + (maxId++).toString();
    this.title = titleIn;
    this.author = author;
    this.format = format;
  }
}

export type ALL =
  AddedBook;
