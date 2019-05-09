import { EntityState, createEntityAdapter } from '@ngrx/entity';
import * as actions from '../actions/books.actions';

export interface BookEntity {
  id: string;
  title: string;
  author: string;
  format: 'Hardcover' | 'Paperback' | 'E-Book';
}

export interface State extends EntityState<BookEntity> {

}

const initialState: State = {
  ids: ['1', '2', '3'],
  entities: {
    1: {
      id: '1', title: 'Jurassic Park', author: 'Michael Crichton', format: 'Hardcover'
    },
    2: {
      id: '2', title: 'The Andromeda Strain', author: 'Michael Crichton', format: 'Paperback'
    },
    3: {
      id: '3', title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J. K. Rowling', format: 'E-Book'
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
        format: action.format as 'Hardcover' | 'Paperback' | 'E-Book'
      };
      return adapters.addOne(bookToAdd, state);
    }
    default: {
      return state;
    }
  }
}
