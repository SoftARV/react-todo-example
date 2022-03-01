import { v1 as uuid } from 'uuid';

import { Todo } from '../../utils/interfaces';

export enum TodoActions {
  create = 'CREATE_TODO',
  edit = 'EDIT_TODO',
  toggle = 'TOGGLE_TODO',
  delete = 'DELETE_TODO'
};

interface CreateTodoActionType {
  type: TodoActions.create;
  payload: Todo
};
export const createTodoActionCreator = (description: string): CreateTodoActionType => {
  return {
    type: TodoActions.create,
    payload: {
      id: uuid(),
      description,
      isComplete: false
    }
  };
};

interface EditTodoActionType {
  type: TodoActions.edit,
  payload: {id: string, description: string}
};
export const editTodoActionCreator = (id: string, description: string): EditTodoActionType => {
  return {
    type: TodoActions.edit,
    payload: {id, description}
  };
};

interface ToggleTodoActionType {
  type: TodoActions.toggle,
  payload: {id: string}
};
export const toggleTodoActionCreator = (id: string): ToggleTodoActionType => {
  return {
    type: TodoActions.toggle,
    payload: { id }
  };
};

interface DeleteTodoActionType {
  type: TodoActions.delete,
  payload: { id: string }
};
export const deleteTodoActionCreator = (id: string): DeleteTodoActionType => {
  return {
    type: TodoActions.delete,
    payload: { id }
  };
};

export type TodoActionType = CreateTodoActionType | EditTodoActionType | ToggleTodoActionType | DeleteTodoActionType;
