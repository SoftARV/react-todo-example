import { ChangeEvent, useState } from "react";
import { CgAdd } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { BarButton } from "..";
import { createTodoActionCreator } from "../../store/Todos/TodoActions";
import './NewTodoItem.scss';

const NewTodoItem = () => {
  const [newTodoInput, setNewTodoinput] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEditInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setNewTodoinput(target.value);
  };

  const handleCreateClick = () => {
    if (newTodoInput.length === 0) { return };

    dispatch(createTodoActionCreator(newTodoInput));

    navigate(-1);
  };

  return (
    <div className="new-todo-wrapper">
      <input
        value={newTodoInput}
        onChange={handleEditInputChange} 
        type="text" 
        placeholder="New Todo" />
      <BarButton clickHandler={handleCreateClick}>
        <CgAdd />
      </BarButton>
    </div>
  );
};

export default NewTodoItem;