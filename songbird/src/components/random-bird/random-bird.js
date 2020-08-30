import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";

import bird from "../../assets/img/bird.jpg";
import correctSound from "../../assets/audio/correct.mp3"

import "./random-bird.css";

export default class RandomBird extends Component {
  render() {
    const {
      audioData: { name, image, audio },
      showBirdInfo,
    } = this.props;

    return (
      <div className="d-flex justify-content-between mt-3 random-bird__container">
        <div className="random-bird__image m-2">
          <img src={showBirdInfo ? image : bird} alt="bird" />
        </div>
        <div className="random-bird__info w-100">
    <h3 className="text-left ml-2 mt-3">{showBirdInfo ? name : '******'}</h3>
          <hr></hr>
          <ReactAudioPlayer
            className="w-100"
            src={showBirdInfo ? correctSound : audio}
            autoPlay={showBirdInfo}
            controls
          />
        </div>
      </div>
    );
  }
}
