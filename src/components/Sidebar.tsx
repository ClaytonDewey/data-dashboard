import React from 'react';
import { navItems } from '../data';
import { ReactComponent as LogoText } from '../img/logo-text.svg';

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <nav className='sidebar'>
      <h1 className='site-title'>
        <span className='visually-hidden'>FinData</span>
        <LogoText />
      </h1>
      <ul className='nav__list'>
        {navItems.map((navItem) => {
          const { id, name, icon } = navItem;
          return (
            <li className='nav__item' key={id}>
              <a href={`/${name}`} className='nav__link'>
                <img src={icon} alt={name} />
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Sidebar;
