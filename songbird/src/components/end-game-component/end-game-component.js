import React, { Component } from "react";

export default class EndGameComponent extends Component {
  render() {
    const { score, onClick } = this.props;
    return (
      <div className="end-game-component">
        {score === 30 ? (
          <div>
            <p>Best result!</p>
            <p>{score} points out of 30</p>
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
            <p>Your score is {score} points out of 30</p>
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
