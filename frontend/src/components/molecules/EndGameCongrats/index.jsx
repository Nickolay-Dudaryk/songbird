import React from 'react';

import PlayAgainBtn from '../../atoms/PlayAgainBtn';
import "./index.scss";

const EndGameCongrats = ({score, onClick}) => {
  return (
    <div className="end-game-component">
      {
        score === 30 ?
          (<p>Best result!</p>) :
          (
            <>
              <p>Congratulations!</p>
              <p>You completed the game</p>
            </>
          )
      }
      <p>
        <span className="score">{score}</span> points out of{" "}
        <span className="score">30</span>
      </p>

      <PlayAgainBtn onClick={onClick}/>
    </div>
  )
}

export default EndGameCongrats;
