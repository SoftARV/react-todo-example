import { v1 as uuid} from 'uuid';

import { Todo } from '../../utils/interfaces';
import { TodoActionType, TodoActions } from './TodoActions';

const todosInitialState: Todo[] = [
  {
    id: uuid(),
    description: "Learn React",
    isComplete: true
  },
  {
    id: uuid(),
    description: "Learn Redux",
    isComplete: true
  },
  {
    id: uuid(),
    description: "Learn Redux-ToolKit",
    isComplete: false
  }
];

export const todosReducer = (state: Todo[] = todosInitialState, action: TodoActionType) => {
  switch(action.type) {
    case TodoActions.create: {
      const { payload } = action;
      return [...state, payload];
    }
    case TodoActions.edit: {
      const { payload } = action;
      return state.map(todo => todo.id === payload.id ? {...todo, description: payload.description} : todo);
    }
    case TodoActions.toggle: {
      const { payload } = action;
      return state.map(todo => todo.id === payload.id ? {...todo, isComplete: !todo.isComplete} : todo);
    }
    case TodoActions.delete: {
      const { payload } = action;
      return state.filter(todo => todo.id !== payload.id);
    }
    default: {
      return state
    }
  }
};
