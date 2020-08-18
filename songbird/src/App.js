import React from "react";

import Header from "./components/header/header";
import RandomBird from "./components/random-bird/random-bird";
import ItemList from "./components/item-list/item-list";
import BirdDetails from "./components/bird-details/bird-details";
import Footer from "./components/footer/footer";
import "./App.css";


// const birdName = "Pica pica";

// const getBirdSound = async (url) => {
//   const res = await fetch(url);

//   if(!res.ok) {
//     throw new Error(`Could not fetch ${url}, recieved ${res.status}`)
//   }

//   const data = res.json();
//   return data;
// };

// getBirdSound(`/api/2/recordings?query=${birdName}`)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err))

// get random number from 1 to 6
// const randomId = Math.floor(Math.random() * 6) + 1;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-main">
        <RandomBird />
        <div className="d-flex justify-content-between w-100 mb-3 mt-3" style={{ maxWidth: 1030 }}>
          <ItemList />
          <BirdDetails/>
        </div>
      </main>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
