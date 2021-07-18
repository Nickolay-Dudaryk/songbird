import React from 'react';
import {nanoid} from "nanoid";
import './index.scss';

const NavList = ({menuItems, currentNavigationItem}) => {
  return (
    <ul className="nav-list">
      {menuItems.map((el, idx) =>
        <li
          key={nanoid()}
          className={`nav-list__item ${idx === currentNavigationItem ? 'nav-list__item_active' : ''}`}>
          {el}
        </li>
      )}
    </ul>
  );
};

export default NavList;
