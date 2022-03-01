import { ReactElement } from 'react';
import { IconType } from 'react-icons';

import { BarButton } from '..';
import './TabBar.scss';

interface TabBarProps {
  tabBarButtons: {handler(): void, icon: ReactElement<IconType>}[]
}
const TabBar = (props: TabBarProps) => {
  const { tabBarButtons } = props;
  return (
    <footer className="footer-wrapper">
      {
      tabBarButtons.map((button, i) => 
        <BarButton key={i} clickHandler={button.handler}>
          {button.icon}
        </BarButton>
      )
      }
    </footer>
  );
};

export default TabBar;