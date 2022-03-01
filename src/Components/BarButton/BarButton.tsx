import React, { ReactElement } from 'react';
import { IconType } from 'react-icons';

import './BarButton.scss';

interface BarButtonProps {
  clickHandler?(): void;
  isFrosted?: boolean;
  children: ReactElement<IconType>;
}
const BarButton = ({clickHandler, children, isFrosted = false}: BarButtonProps) => {
  return (
    <button 
      className={`button-wrapper ${isFrosted ? 'is-frosted' : ''}`} 
      onClick={clickHandler}>
      {children}
    </button>
  );
}

export default BarButton;
