import React from 'react';

import BirdSelectBtn from '../../atoms/BirdSelectBtn';

const BirdsList = ({itemList, onBirdSelected}) => {
  return (
    <div>
      {itemList.map((item, idx) => {
          return (
            <BirdSelectBtn
              name={item.name}
              onBirdSelected={onBirdSelected}
              currentBirdId={idx}
              key={item.name}
            />
          )
        }
      )}
    </div>
  )
};

export default BirdsList;
