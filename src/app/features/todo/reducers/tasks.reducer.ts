// import { Action } from '@ngrx/store';

import { EntityState, createEntityAdapter } from '@ngrx/entity';
import * as actions from '../actions/tasks.actions';

export interface TaskEntity {
  id: string;
  task: string;
}

export interface State extends EntityState<TaskEntity> {

}

const initialState: State = {
  ids: ['1', '2', '3'],
  entities: {
    1: {
      id: '1', task: 'Wash Cars'
    },
    2: {
      id: '2', task: 'Fix Deck'
    },
    3: {
      id: '3', task: 'Fix Door'
    }
  }
};

export const adapters = createEntityAdapter<TaskEntity>();

export function reducer(state: State = initialState, action: actions.ALL): State {
  switch (action.type) {
    case actions.TASK_ADDED: {
      const taskToAdd: TaskEntity = { id: action.id, task: action.task };
      return adapters.addOne(taskToAdd, state);
    }
    default: {
      return state;
    }
  }
}
