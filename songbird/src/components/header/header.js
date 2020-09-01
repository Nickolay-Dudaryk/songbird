import React, { Component } from "react";

import "./header.css";

export default class Header extends Component {
  render() {
    const { currentNavigationItem, menuItems, score } = this.props;

    const listOfMenuItems = menuItems.map((el, idx) => {
        return(
            <li key={idx} className={`list-group-item w-100 nav-item ${idx === currentNavigationItem ? 'active-group' : null}`}> { el } </li>
        )
    })

    return (
      <div className="header mt-4 w-100">

        <div className="header__logo__score">
          <h3 className="header__logo">SongBird</h3>
          <span className="header__score">Score: { score }</span>
        </div>

        <div className="header__list mt-3 mb-3">
            <ul className="list-group list-group-horizontal d-flex flex-wrap flex-lg-nowrap">
                { listOfMenuItems }
            </ul>
        </div>
      </div>
    );
  }
}
