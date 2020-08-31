import React, { Component } from "react";

import "./end-game-component.css";
export default class EndGameComponent extends Component {
  render() {
    const { score, onClick } = this.props;
    return (
      <div className="end-game-component">
        {score === 30 ? (
          <div>
            <p>Best result!</p>
            <p>
              <span className="score">{score}</span> points out of{" "}
              <span className="score">30</span>
            </p>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => onClick()}
            >
              Play again
            </button>
          </div>
        ) : (
          <div>
            <p>Congratulations!</p>
            <p>You completed the game</p>
            <p>
              Your score is <span className="score">{score}</span> points out of{" "}
              <span className="score">30</span>
            </p>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => onClick()}
            >
              Play again
            </button>
          </div>
        )}
      </div>
    );
  }
}
