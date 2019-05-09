import * as fromcounter from './counter.reducer';
import { createSelector } from '@ngrx/store';

export interface State {
  counter: fromcounter.State;
}

export const reducers = {
  counter: fromcounter.reducer
};

// Selectors

export const selectCurrentcount = (state: State) => state.counter.count;
export const selectCountBy = (state: State) => state.counter.by;

export const selectDecrementDisabled = createSelector(selectCurrentcount, selectCountBy, (c, b) => c - b < 0);
