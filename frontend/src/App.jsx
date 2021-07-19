import React, {useState, useEffect} from 'react';
import axios from 'axios';
// COMPONENTS
import Header from "./components/organisms/Header";
import RandomBird from "./components/molecules/RandomBird";
import Footer from "./components/organisms/Footer";
import BirdGuessing from "./components/molecules/BirdGuessing";
import EndGameComponent from "./components/molecules/EndGameCongrats";
// SOUNDS
import wrong from "./assets/audio/wrong.mp3";
// STYLES
import "./App.scss";

const App = () => {
  const [birds, setBirds] = useState([]);
  let [score, setScore] = useState(0);
  let [scoreLeftInCurrentAttempt, setScoreLeftInCurrentAttempt] = useState(5);
  let [currentIndexOfBirdsData, setCurrentIndexOfBirdsData] = useState(0);
  const [currentBirdId, setCurrentBirdId] = useState(null);
  const [itemList, setItemList] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [randomBirdId, setRandomBirdId] = useState(null);

  const menuItems = [
    "Разминка",
    "Воробьиные",
    "Лесные",
    "Певчие",
    "Хищные",
    "Морские",
  ];

  useEffect(() => {
    const fetchBirds = async () => {
      const { data } = await axios.get('api/birds');

      setBirds(data)
    }

    fetchBirds();
  }, []);

  useEffect(() => {
    createItemList();
  }, [birds]);

  const createItemList = () => {
    console.log(birds)
    setRandomBirdId(Math.floor(Math.random() * 5));
    setItemList(birds[currentIndexOfBirdsData]);
    setIsAnswerCorrect(false);
    setCurrentBirdId(null);
  };

  const onBirdSelected = (currentBirdId, e) => {
    if (!isAnswerCorrect) {
      if (currentBirdId === randomBirdId) {
        if (!e.target.classList.contains("correct")) {
          e.target.classList.add("correct");
          setIsAnswerCorrect(true)
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
      setScoreLeftInCurrentAttempt(5);
      createItemList();
    } else {
      setCurrentIndexOfBirdsData(currentIndexOfBirdsData += 1);
    }
  };

  const restartGame = () => {
    setCurrentIndexOfBirdsData(0);
    setScore(0);
    setScoreLeftInCurrentAttempt(5);
    setIsAnswerCorrect(false);
  };

  if (!itemList) return null;

  return (
    <div className="App">
      {currentIndexOfBirdsData === menuItems.length ? (
        <EndGameComponent score={score} onClick={restartGame}/>
      ) : (
        <div>
          <header className="App-header">
            <Header currentNavigationItem={currentIndexOfBirdsData}
                    menuItems={menuItems}
                    score={score}/>
          </header>
          <main className="App-main">
            <RandomBird
              audioData={itemList[randomBirdId]}
              showBirdInfo={isAnswerCorrect}
            />
            <BirdGuessing
              onBirdSelected={onBirdSelected}
              itemList={itemList}
              currentBirdId={currentBirdId}
            />
          </main>
          <footer className="App-footer">
            <Footer
              disabled={isAnswerCorrect}
              onClick={changeLevel}
            />
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;
