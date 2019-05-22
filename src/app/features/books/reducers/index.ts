import * as fromBooks from './books.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BookItem } from '../modles';
import { Dictionary } from '@ngrx/entity';

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

const selectLoanedBooksBranch = createSelector(selectFeature, f => f.books);
// 3. "Helpers"

const { selectAll: selectAllBookEntities } = fromBooks.adapters.getSelectors(selectBooksBranch);

const { selectAll: selectOnLoanBookEntities } = fromBooks.adapters.getSelectors(selectLoanedBooksBranch);
// 4. Component Selector

export const selectAllOnLoanBookItems = createSelector(selectOnLoanBookEntities, t => (t as BookItem[])
  .filter(s => (s as BookItem).onLoan === true));

export const selectAllBookItems = createSelector(selectAllBookEntities, t => (t as BookItem[])
  .filter(s => (s as BookItem).onLoan === false));

// export const loanedBooks = (state: State) => state.books.reduce(s => (s as BookItem).onLoan === true);
