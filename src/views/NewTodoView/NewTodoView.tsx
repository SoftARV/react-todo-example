import { NewTodoItem } from "../../Components";
import './NewTodoView.scss';

const NewTodoView = () => {
  return (
    <div className="new-todo-view-wrapper">
      <NewTodoItem />
    </div>
  );
};

export default NewTodoView;