import React, { Component } from "react";
import ReactAudioPlayer from "react-audio-player";
import Item from "../item/item";

import "./bird-guessing-block.css";

export default class BirdGuessingBlock extends Component {
  render() {
    const {
      onBirdSelected,
      itemList,
      currentBirdId,
      isAnswerCorrect,
    } = this.props;

    const dummy_block = (
      <div className="dummy-block">
        <p>Послушайте плеер.</p>
        <p>Выберите птицу из списка</p>
      </div>
    );

    return (
      <div className="container">
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
        {currentBirdId != null ? (
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
                <hr />
                <p className="bird-species">{itemList[currentBirdId].species}</p>
                <hr />
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
        ) : (
          dummy_block
        )}
      </div>
    );
  }
}
