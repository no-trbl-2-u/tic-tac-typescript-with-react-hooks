import React, { useState, useEffect } from 'react';
import Board from '../Components/Board';
import './App.css';

const App = () => {

  // setBoard :: [Int] -> [Int] State
  const [board, setBoard] = useState(
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  );

  // setPlayer :: String -> String State
  const [currentPlayer, setPlayer] = useState("X")

  // togglePlayer :: String State -> String State
  const togglePlayer = 
    (currentPlayer: String) => {
      (currentPlayer == "X") ?
        setPlayer("Y") : setPlayer("X")
  }

  useEffect(
    function logGame () : void {
      console.log(`==============================`)
      console.log(`logPlayer -> ${currentPlayer}`);
      console.log(`board -> ${board}`)
    }
  )

  return (
    // Container for the App
    <section className="App">
      <h1 className="App-header">Tic-Tac-Typescript</h1>
      <Board 
        board={ board }
        currentPlayer={ currentPlayer }
        setPlayer={ setPlayer }
        setBoard={ setBoard }
      />
      <h3>Current Player: { currentPlayer }</h3>
    </section>
  )
}

export default App;
