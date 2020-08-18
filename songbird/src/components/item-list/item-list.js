import React from "react";

import "./item-list.css";

const ItemList = () => {
  return (
    // <div className="birds__list__container">
    //     <ul className="birds__list">
    //         <li className="birds__item">Ворон</li>
    //         <li className="birds__item">Журавль</li>
    //         <li className="birds__item">Ласточка</li>
    //         <li className="birds__item">Козодой</li>
    //         <li className="birds__item">Кукушка</li>
    //         <li className="birds__item">Синица</li>
    //     </ul>
    // </div>
    <div className="list-group">
      <button type="button" className="list-group-item list-group-item-action">
        <span className="btn-circle"></span>
        Ворон
      </button>
      <button type="button" className="list-group-item list-group-item-action">
        <span className="btn-circle"></span>
        Журавль
      </button>
      <button type="button" className="list-group-item list-group-item-action">
        <span className="btn-circle"></span>
        Ласточка
      </button>
      <button type="button" className="list-group-item list-group-item-action">
        <span className="btn-circle"></span>
        Козодой
      </button>
      <button type="button" className="list-group-item list-group-item-action" disabled>
        <span className="btn-circle"></span>
        Кукушка
      </button>
      <button type="button" className="list-group-item list-group-item-action">
      <span className="btn-circle"></span>
        Синица
      </button>
    </div>
  );
};

export default ItemList;
