import { useDispatch, useSelector } from "react-redux";
import { CgList, CgRadioCheck, CgRadioChecked } from 'react-icons/cg';

import { TabBar, TodoList } from "../../Components";
import { FilterOptions, State } from "../../utils/interfaces";
import { setFilterOptionActionCreator } from "../../store/FilterOption/FilterOptionActions";
import './TodosView.scss';


function TodosView() {
  const todos = useSelector((state: State) => {
    const { todos, filterOption } = state;
    switch(filterOption) {
      case FilterOptions.all:
        return todos;
      case FilterOptions.incomplete:
        return todos.filter(todo => !todo.isComplete);
      case FilterOptions.complete:
        return todos.filter(todo => todo.isComplete);
      default:
        return todos;
    };
  });
  const dispatch = useDispatch();

  const showAllHandler = () => {
    dispatch(setFilterOptionActionCreator(FilterOptions.all));
  };

  const showIncompleteHandler = () => {
    dispatch(setFilterOptionActionCreator(FilterOptions.incomplete));
  };

  const showCompleteHandler = () => {
    dispatch(setFilterOptionActionCreator(FilterOptions.complete));
  };

  const tabBarButtons = [
    {handler: showAllHandler, icon: <CgList />},
    {handler: showIncompleteHandler, icon: <CgRadioCheck />},
    {handler: showCompleteHandler, icon: <CgRadioChecked />}
  ];

  return (
    <div className="todos-wrapper">
      <TodoList todos={todos} />
      <TabBar tabBarButtons={tabBarButtons} />
    </div>
  );
}

export default TodosView;