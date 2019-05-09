import { Action } from '@ngrx/store';

let maxId = 99;

export const TASK_ADDED = '[todo] task added';
export class AddedTask implements Action {
  readonly type = TASK_ADDED;
  id: string;
  constructor(public task: string) {
    this.id = 'T' + (maxId++).toString();
  }
}

export type ALL =
  AddedTask;
