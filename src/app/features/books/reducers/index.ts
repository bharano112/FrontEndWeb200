import * as fromBooks from './books.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BookItem } from '../modles';

export interface State {
  books: fromBooks.State;
}

export const reducers = {
  books: fromBooks.reducer
};

// 1. Feature Selector
const selectFeature = createFeatureSelector<State>('booksFeature');

// 2. A Selector for each "branch" of that feature.
const selectBooksBranch = createSelector(selectFeature, f => f.books);
// 3. "Helpers"

const { selectAll: selectAllBookEntities } = fromBooks.adapters.getSelectors(selectBooksBranch);

// 4. Component Selector

export const selectAllBookItems = createSelector(selectAllBookEntities, t => t as BookItem[]);
