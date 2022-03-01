import { Outlet, Route, Routes } from 'react-router-dom';

import { NewTodoView, TodosView } from '..';
import { NavBar } from '../../Components/index';
import './MainView.scss';

function MainView() {
  return (
    <div className="main-wrapper">
      <NavBar />
      <Routes>
        <Route path='/'>
          <Route index element={<TodosView />} />
          <Route path='new' element={<NewTodoView />} />
        </Route>
      </Routes>
      <Outlet />      
    </div>
  );
}

export default MainView;