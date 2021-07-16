import React from 'react';

import Index from '../../molecules/NavList';

import "./index.scss";

const Header = ({currentNavigationItem, menuItems, score}) => {
  return (
    <div className="header__container">
      <div className="header">
        <h1 className="header__logo">SongBird</h1>
        <span className="header__score">Score: {score}</span>
      </div>

      <Index currentNavigationItem={currentNavigationItem} menuItems={menuItems}/>
    </div>
  );
};

export default Header;
