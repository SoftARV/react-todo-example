import { CgTrash } from 'react-icons/cg';

import { BarButton } from '..';
import { Todo } from '../../utils/interfaces';
import './TodoItem.scss';

interface TodoItemProps {
  todo: Todo,
  checkHandler(): void,
  deleteHandler(): void
};
const TodoItem = (props: TodoItemProps) => {
  const { todo, checkHandler, deleteHandler } = props;
  

  return (
    <li className='todo-item-wrapper' onClick={checkHandler}>
      <p className={todo.isComplete ? 'crossed' : ''}>{todo.description}</p>
      <BarButton clickHandler={deleteHandler}>
        <CgTrash />
      </BarButton>
    </li>
  );
}

export default TodoItem;
