import React, {useState, useEffect} from 'react';

import Header from "./components/organisms/Header";
import RandomBird from "./components/molecules/RandomBird";
import Footer from "./components/organisms/Footer";
import BirdGuessingBlock from "./components/molecules/BirdGuessing";
import EndGameComponent from "./components/molecules/EndGameCongrats";

import birdsData from "./birds-data";

import wrong from "./assets/audio/wrong.mp3";

import "./App.css";

const App = () => {
  let [score, setScore] = useState(0);
  let [scoreLeftInCurrentAttempt, setScoreLeftInCurrentAttempt] = useState(5);
  let [currentIndexOfBirdsData, setCurrentIndexOfBirdsData] = useState(0);
  let [currentBirdId, setCurrentBirdId] = useState(null);
  let [itemList, setItemList] = useState(null);
  let [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  let [randomBirdId, setRandomBirdId] = useState(null);

  const menuItems = [
    "Разминка",
    "Воробьиные",
    "Лесные",
    "Певчие",
    "Хищные",
    "Морские",
  ];

  useEffect(() => {
    if (currentIndexOfBirdsData === 0 || currentIndexOfBirdsData === 5) {
      createItemList();
    }
  }, []);

  const createItemList = () => {
    setRandomBirdId(randomBirdId = Math.floor(Math.random() * 5));
    setItemList(itemList = birdsData[currentIndexOfBirdsData]);
    setIsAnswerCorrect(isAnswerCorrect = false);
    setCurrentBirdId(currentBirdId = null);
  };

  const onBirdSelected = (currentBirdId, e) => {
    if (!isAnswerCorrect) {
      if (currentBirdId === randomBirdId) {
        if (!e.target.classList.contains("correct")) {
          e.target.classList.add("correct");
          setIsAnswerCorrect(isAnswerCorrect = true)
          setScore(score += scoreLeftInCurrentAttempt)
        }
      } else if (!e.target.classList.contains("wrong")) {
        e.target.classList.add("wrong");
        const audio = new Audio(wrong);
        audio.play();
        setScoreLeftInCurrentAttempt(scoreLeftInCurrentAttempt -= 1);
      }
    }
    setCurrentBirdId(currentBirdId);
  };

  const changeLevel = () => {
    if (currentIndexOfBirdsData !== menuItems.length - 1) {
      setCurrentIndexOfBirdsData(currentIndexOfBirdsData += 1);
      setScoreLeftInCurrentAttempt(scoreLeftInCurrentAttempt = 5);
      createItemList();
    } else {
      setCurrentIndexOfBirdsData(currentIndexOfBirdsData += 1);
    }
  };

  const restartGame = () => {
    setCurrentIndexOfBirdsData(currentIndexOfBirdsData = 0);
    setScore(score = 0);
    setScoreLeftInCurrentAttempt(scoreLeftInCurrentAttempt = 5);
    setIsAnswerCorrect(isAnswerCorrect = false);
  };

  if (!itemList) return null;

  return (
    <div className="App-container">
      {currentIndexOfBirdsData === menuItems.length ? (
        <EndGameComponent score={score} onClick={restartGame}/>
      ) : (
        <div className="App">
          <header className="App-header">
            <Header
              currentNavigationItem={currentIndexOfBirdsData}
              menuItems={menuItems}
              score={score}
            />
          </header>
          <main className="App-main">
            <RandomBird
              audioData={itemList[randomBirdId]}
              showBirdInfo={isAnswerCorrect}
            />
            <BirdGuessingBlock
              onBirdSelected={onBirdSelected}
              itemList={itemList}
              currentBirdId={currentBirdId}
            />
          </main>
          <footer className="App-footer">
            <Footer
              disabled={ isAnswerCorrect }
              onClick={ changeLevel }
            />
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;
