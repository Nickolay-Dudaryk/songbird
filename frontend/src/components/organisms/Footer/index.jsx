import React from 'react';

import './index.scss';

const Footer = ({disabled, onClick}) => {
  const class_name = disabled ? "btn btn-success btn-block" : "btn btn-secondary btn-block";

  return (
    <div className="footer mb-3">
      <button
        type="button"
        className={class_name}
        disabled={!disabled}
        onClick={onClick}
      >
        Next level
      </button>
    </div>
  );
}

export default Footer;
