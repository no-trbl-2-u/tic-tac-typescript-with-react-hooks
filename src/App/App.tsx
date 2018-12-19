import React, { useState } from 'react';
import Board from '../Components/Board';
import './App.css';

const App = () => {

  const [board, setBoard] = useState(
    [false, false, false,
    false, false, false,
    false, false, false]
  );

  // setPlayer :: String -> String State
  const [currentPlayer, setPlayer] = useState("X")

  // togglePlayer :: String State -> String State
  const togglePlayer = 
    (currentPlayer: String) => {
      (currentPlayer == "X") ?
        setPlayer("Y") : setPlayer("X")
  }

  return (
    // Container for the App
    <section className="App">
      <h1 className="App-header">Tic-Tac-Typescript</h1>
      <Board 
        board={ board }
        currentPlayer={ currentPlayer }
      />
    </section>
  )
}

export default App;
