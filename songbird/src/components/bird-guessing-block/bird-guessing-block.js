import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
import Item from "../item/item";

import "./bird-guessing-block.css";

export default class BirdGuessingBlock extends Component {
  render() {
    const { onBirdSelected, itemList, currentBirdId } = this.props;

    const dummy_block = (
      <div className="birds-details__container">
        <p>Послушайте плеер.</p>
        <p>Выберите птицу из списка</p>
      </div>
    );

    return (
      <div className="bird__guessing__block">
        <div className="list-group">
          {itemList.map((item, idx) => {
            return (
              <Item
                name={item.name}
                onBirdSelected={onBirdSelected}
                currentBirdId={idx}
                key={item.id}
              />
            );
          })}
        </div>
        {(currentBirdId != null) ? 
              <div className="birds-details__container">
              <img src={itemList[currentBirdId].image} alt="bird" />
              <ReactAudioPlayer
                  className="w-100"
                  src={itemList[currentBirdId].audio}
                  autoPlay={false}
                  controls
                />
              <p>{itemList[currentBirdId].name}</p>
              <p>{itemList[currentBirdId].species}</p>
              <p>{itemList[currentBirdId].description}</p>
            </div> 
        : dummy_block }
      </div>
    );
  }
}
