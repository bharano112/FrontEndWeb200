import { Action } from '@ngrx/store';

export const INCREMENT = '[counter] increment';
export class CounterIncremented implements Action {
  readonly type = INCREMENT;
  constructor() { }
}

export const DECREMENT = '[counter] decrement';
export class CounterDecrement implements Action {
  readonly type = DECREMENT;
  constructor() { }
}

export const RESET = '[counter] reset';
export class CounterReset implements Action {
  readonly type = RESET;
  constructor() { }
}

export const SET_COUNT_BY = '[counter] set count by';
export class CountBySet implements Action {
  readonly type = SET_COUNT_BY;
  constructor(public by: 1 | 3 | 5) { }
}

export const LOAD_COUNT_BY = '[counter] load count by';
export class LoadCountBy implements Action {
  readonly type = LOAD_COUNT_BY;
  constructor() { }
}


export type All = CounterIncremented
  | CounterDecrement
  | CounterReset
  | CountBySet
  | LoadCountBy;
