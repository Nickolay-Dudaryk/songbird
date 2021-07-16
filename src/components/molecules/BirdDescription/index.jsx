import React from 'react';

import ReactAudioPlayer from "react-audio-player";

const BirdDescriptionBlock = ({itemList, currentBirdId}) => {
  return (
    <div className="birds-details-block">
      <div className="image-name-audio-block">
        <div className="image-block">
          <img
            className="bird-image"
            src={itemList[currentBirdId].image}
            alt="bird"
          />
        </div>
        <div className="name-audio">
          <p className="bird-name">{itemList[currentBirdId].name}</p>
          <hr/>
          <p className="bird-species">{itemList[currentBirdId].species}</p>
          <hr/>
          <ReactAudioPlayer
            className="w-100"
            src={itemList[currentBirdId].audio}
            autoPlay={false}
            controls
          />
        </div>
      </div>

      <p className="description">{itemList[currentBirdId].description}</p>
    </div>
  )
}

export default BirdDescriptionBlock;
