import React from "react";

import BirdsList from '../BirdsList';
import BirdDescriptionBlock from '../BirdDescription'

import "./index.scss";

const BirdGuessing = ({onBirdSelected, itemList, currentBirdId}) => {
  const dummy_block = (
    <div className="dummy-block">
      <p>Послушайте плеер.</p>
      <p>Выберите птицу из списка</p>
    </div>
  );

  return (
    <div className="bird-guessing-block-container">
      <div>
        <BirdsList itemList={itemList} onBirdSelected={onBirdSelected}/>
      </div>

      {currentBirdId != null ? (
        <BirdDescriptionBlock itemList={itemList} currentBirdId={currentBirdId}/>
      ) : (
        dummy_block
      )}
    </div>
  )
}
export default BirdGuessing;
