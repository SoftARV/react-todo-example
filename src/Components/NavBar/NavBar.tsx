import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CgAdd, CgCloseO  } from 'react-icons/cg';

import { BarButton } from '..';
import './NavBar.scss';

const NavBar = () => {
  const [isNewTodoViewActive, setIsNewTodoViewActive] = useState(false);
  const navigate = useNavigate();
  let location = useLocation();
  
  useEffect(() => {
    console.log(location)
    if (location.pathname === '/new') {
      setIsNewTodoViewActive(true);
    } else {
      setIsNewTodoViewActive(false);
    }
  },[location]);

  const addTodoClickHandler = () => {
    navigate('/new');
  };

  const cancelClickhandler = () => {
    navigate(-1);
  };

  const createTodoButton = (
    <BarButton clickHandler={addTodoClickHandler}>
      <CgAdd />
    </BarButton>
  );

  const cancelButton = (
    <BarButton clickHandler={cancelClickhandler}>
      <CgCloseO />
    </BarButton>
  );

  return (
    <header className='navbar-wrapper'>
      {isNewTodoViewActive ? cancelButton : createTodoButton}
    </header>
  );
}

export default NavBar