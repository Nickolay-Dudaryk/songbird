import React from 'react';

import './index.scss';

const NavList = ({menuItems, currentNavigationItem}) => {
  return (
    <ul className="nav-list">
      {menuItems.map((el, idx) =>
        <li
          key={idx}
          className={`nav-item ${idx === currentNavigationItem ? 'active-group' : null}`}>
          {el}
        </li>
      )}
    </ul>
  );
};

export default NavList;
