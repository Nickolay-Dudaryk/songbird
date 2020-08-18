import React from "react";
import ReactAudioPlayer from "react-audio-player";

import bird from "../random-bird/bird.jpg";
import birdData from "../../birds-data";

import "./random-bird.css";

const RandomBird = () => {
  return (
    <div className="d-flex justify-content-between mt-3 random-bird__container">
      <div className="random-bird__image m-2">
        <img src={ bird } alt="bird" />
      </div>
      <div className="random-bird__info w-100">
        <h3 className="text-left ml-2 mt-3">******</h3>
        <hr></hr>
        <ReactAudioPlayer className="w-100" src={ birdData[0][0].audio } controls />
      </div>
    </div>
  );
};

export default RandomBird;
