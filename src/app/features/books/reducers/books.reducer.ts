import { EntityState, createEntityAdapter } from '@ngrx/entity';
import * as actions from '../actions/books.actions';

export interface BookEntity {
  id: string;
  title: string;
  author: string;
  onLoan: boolean;
  format: 'Hardcover' | 'Paperback' | 'E-Book';
}

export interface State extends EntityState<BookEntity> {

}

const initialState: State = {
  ids: ['1', '2', '3', '4'],
  entities: {
    1: {
      id: '1', title: 'Jurassic Park', author: 'Michael Crichton', onLoan: true, format: 'Hardcover'
    },
    2: {
      id: '2', title: 'The Andromeda Strain', author: 'Michael Crichton', onLoan: false, format: 'Paperback'
    },
    3: {
      id: '3', title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J. K. Rowling', onLoan: false, format: 'E-Book'
    },
    4: {
      id: '4', title: 'Harry Potter and the Prisoner of Azkaban', author: 'J. K. Rowling', onLoan: false, format: 'E-Book'
    },
  }
};

export const adapters = createEntityAdapter<BookEntity>();

export function reducer(state: State = initialState, action: actions.ALL): State {
  switch (action.type) {
    case actions.BOOK_ADDED: {
      const bookToAdd: BookEntity = {
        id: action.id,
        author: action.author,
        title: action.title,
        onLoan: false,
        format: action.format as 'Hardcover' | 'Paperback' | 'E-Book'
      };
      return adapters.addOne(bookToAdd, state);
    }
    case actions.LOAN_BOOK: {
      const bookToLoan: BookEntity = {
        id: action.id,
        author: action.author,
        title: action.title,
        format: action.format as 'Hardcover' | 'Paperback' | 'E-Book',
        onLoan: true
      };
      state = adapters.removeOne(bookToLoan.id, state);
      return adapters.addOne(bookToLoan, state);
    }
    default: {
      return state;
    }
  }
}
