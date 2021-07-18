import React from 'react';

import './index.scss';

const BirdSelectBtn = ({name, onBirdSelected, currentBirdId}) => {
  return (
    <button
      type="button"
      className="bird-select-btn"
      onClick={(e) => onBirdSelected(currentBirdId, e)}
    >
      {/*<span className="btn-circle"></span>*/}
      {name}
    </button>
  )
};

export default BirdSelectBtn;