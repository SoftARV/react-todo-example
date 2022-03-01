import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

import { todosReducer } from './Todos/TodosReducer';
import { filterOptionReducer } from './FilterOption/FilterOptionReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  filterOption: filterOptionReducer
});

export const store = createStore(
  rootReducer,
  devToolsEnhancer()
);
