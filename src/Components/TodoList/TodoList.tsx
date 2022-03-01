import { useDispatch } from "react-redux";

import { TodoItem } from "..";
import { deleteTodoActionCreator, toggleTodoActionCreator } from "../../store/Todos/TodoActions";
import { Todo } from "../../utils/interfaces";

import './TodoList.scss';

interface TodoListProps {
  todos: Todo[]
}
const TodoList = (props: TodoListProps) => {
  const { todos } = props;

  const dispatch = useDispatch();

  const checkHandler = (id: string) => {
    dispatch(toggleTodoActionCreator(id));
  };

  const deleteHandler = (id: string) => {
    dispatch(deleteTodoActionCreator(id));
  }

  return (
    <ol className="todo-list-wrapper">
      {todos.map(todo => <TodoItem 
        key={todo.id} 
        todo={todo} 
        checkHandler={() => checkHandler(todo.id) }
        deleteHandler={() => deleteHandler(todo.id)} />)}
    </ol>
  );
}

export default TodoList;