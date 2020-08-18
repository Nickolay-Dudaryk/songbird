import React from 'react';

import Header from '../header';
import RandomBird from '../random-bird';
import ItemList from '../item-list';
import BirdDetails from '../bird-details';

import './app.css';

const App = () => {
  return (
    <div>
      <Header />
      <RandomBird />

      <div className="row mb-2">
        <div className="col-md-6">
          <ItemList />
        </div>
      </div>

      <div className="col-md-6">
        <BirdDetails />
      </div>
    </div>
  )
};

export default App;
