import React, { Component } from "react";

import Header from "./components/header/header";
import RandomBird from "./components/random-bird/random-bird";
import FooterBtn from "./components/footer/footer-btn";
import birdsData from "./birds-data";
import BirdGuessingBlock from "./components/bird-guessing-block/bird-guessing-block";
import EndGameComponent from "./components/end-game-component/end-game-component";

import wrong from "./assets/audio/wrong.mp3";

import "./App.css";

export default class App extends Component {
  state = {
    score: 0,
    scoreLeftInCurrientAttempt: 5,
    currentIndexOfBirdsData: 0,
    currentBirdId: null,
    itemList: null,
    isAnswerCorrect: false,
  };

  menuItems = [
    "Разминка",
    "Воробьиные",
    "Лесные птицы",
    "Певчие птицы",
    "Хищные птицы",
    "Морские птицы",
  ];

  componentDidMount() {
    this.createItemList();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.currentIndexOfBirdsData === 6 &&
      this.state.currentIndexOfBirdsData === 0
    ) {
      this.createItemList();
    }
  }

  createItemList = () => {
    const { currentIndexOfBirdsData } = this.state;
    const itemList = birdsData[currentIndexOfBirdsData];
    const randomBirdId = Math.floor(Math.random() * 6) + 1;

    this.setState({
      itemList,
      randomBirdId,
      isAnswerCorrect: false,
      currentBirdId: null,
    });
  };

  onBirdSelected = (currentBirdId, e) => {
    const {
      randomBirdId,
      score,
      scoreLeftInCurrientAttempt,
      isAnswerCorrect,
    } = this.state;

    if (!isAnswerCorrect) {
      if (currentBirdId === randomBirdId) {
        if (!e.target.classList.contains("correct")) {
          e.target.classList.add("correct");

          this.setState({
            isAnswerCorrect: true,
            score: score + scoreLeftInCurrientAttempt,
          });
        }
      } else if (!e.target.classList.contains("wrong")) {
        e.target.classList.add("wrong");

        const audio = new Audio(wrong);
        audio.play();

        this.setState({
          scoreLeftInCurrientAttempt: scoreLeftInCurrientAttempt - 1,
        });
      }
    }
    this.setState({ currentBirdId });
  };

  changeLevel = () => {
    if (this.state.currentIndexOfBirdsData !== this.menuItems.length - 1) {
      this.setState({
        currentIndexOfBirdsData: (this.state.currentIndexOfBirdsData += 1),
        scoreLeftInCurrientAttempt: 5,
      });
      this.createItemList();
    } else {
      this.setState({
        currentIndexOfBirdsData: (this.state.currentIndexOfBirdsData += 1),
      });
    }
  };

  restartGame = () => {
    this.setState({
      currentIndexOfBirdsData: 0,
      score: 0,
      scoreLeftInCurrientAttempt: 5,
    });
  };

  render() {
    const {
      currentIndexOfBirdsData,
      isAnswerCorrect,
      currentBirdId,
      randomBirdId,
      itemList,
      score,
      scoreLeftInCurrientAttempt,
    } = this.state;

    if (!itemList) return null;

    return (
      <div className="App">
        {currentIndexOfBirdsData === this.menuItems.length ? (
          <EndGameComponent score={score} onClick={this.restartGame} />
        ) : (
          <div className="App">
            <header className="App-header">
              <Header
                currentNavigationItem={currentIndexOfBirdsData}
                menuItems={this.menuItems}
                score={score}
              />
            </header>
            <main className="App-main">
              <RandomBird
                audioData={itemList[randomBirdId]}
                showBirdInfo={isAnswerCorrect}
              />
              <BirdGuessingBlock
                onBirdSelected={this.onBirdSelected}
                itemList={itemList}
                currentBirdId={currentBirdId}
              />
            </main>
            <footer className="App-footer">
              <FooterBtn
                disabled={isAnswerCorrect}
                onClick={this.changeLevel}
              />
            </footer>
          </div>
        )}
      </div>
    );
  }
}
