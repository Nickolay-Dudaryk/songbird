import React from 'react';

const PlayAgainBtn = ({onClick}) => {
  return (
    <button
      type="button"
      className="btn btn-success"
      onClick={() => onClick()}
    >
      Play again
    </button>
  )
}

export default PlayAgainBtn;