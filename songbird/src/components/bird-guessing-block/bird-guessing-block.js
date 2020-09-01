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
      <div className="dummy-block mb-3 mt-3 col-12 col-lg-6">
        <p>Послушайте плеер.</p>
        <p>Выберите птицу из списка</p>
      </div>
    );

    return (
      <div className="bird-guessing-block-container d-flex mb-2 flex-column col-12 flex-lg-row">
        <div className="list-group col-12 col-sm-12 col-lg-6 mr-1 mb-3 mt-3">
          {itemList.map((item, idx) => {
            return (
              <Item
                name={item.name}
                onBirdSelected={onBirdSelected}
                currentBirdId={idx}
                key={item.name}
              />
            );
          })}
        </div>
        {currentBirdId != null ? (
          <div className="birds-details-block mb-3 mt-3 col-12 col-lg-6">
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
