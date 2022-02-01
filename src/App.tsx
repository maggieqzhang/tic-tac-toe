import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import GameComponent from "./components/Game";

function App() {
  // check the win condition after each turn
  // if it's a win, then put up an alert letting the user know which person won

  // change to the other side (X or O)

  // Make a move at a certain square (probably a click handler from the actual ui)
  return (
    <div className="App">
      <GameComponent />
    </div>
  );
}

export default App;
