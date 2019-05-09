// import { Action } from '@ngrx/store';
import * as actions from '../actions/counter.actions';
import { tassign } from 'tassign';

export interface State {
  count: number;
  by: 1 | 3 | 5;
}

const initialState: State = {
  count: 0,
  by: 1
};

// the reducer implements an action then returns the NEW State

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.SET_COUNT_BY:
      return tassign(state, { by: action.by });
    case actions.INCREMENT:
      return tassign(state, { count: state.count + state.by });
    case actions.DECREMENT:
      return tassign(state, { count: state.count - state.by });
    case actions.RESET:
      return initialState;
    default: {
      return state;
    }
  }
}
