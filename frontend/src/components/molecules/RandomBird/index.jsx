import React from "react";
import ReactAudioPlayer from "react-audio-player";

import bird from "../../../assets/images/bird.jpg";
import correctSound from "../../../assets/audio/correct.mp3"

import "./index.scss";

const RandomBird = ({audioData: {name, image, audio}, showBirdInfo}) => {
  console.log(name);

  return (
    <div className="random-bird__container">
      <div className="random-bird__image">
        <img className="image" src={showBirdInfo ? image : bird} alt="bird"/>
      </div>
      <div className="random-bird__info">
        <h3 className="random-bird__name">{showBirdInfo ? name : '******'}</h3>

        <ReactAudioPlayer
          className="react-audio-player"
          src={showBirdInfo ? correctSound : audio}
          autoPlay={showBirdInfo}
          controls
        />
      </div>
    </div>
  );
}

export default RandomBird;