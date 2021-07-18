import React from 'react';
import NavList from '../../molecules/NavList';
import "./index.scss";

const Header = ({currentNavigationItem, menuItems, score}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">

            <div className="header-content">
              <h1 className="header__logo">SongBird</h1>
              <span className="header__score">Score: {score}</span>
            </div>

            <NavList currentNavigationItem={currentNavigationItem} menuItems={menuItems}/>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
