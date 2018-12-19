import React, { useState, useEffect } from 'react';
import Board from '../Components/Board';
import './App.css';

const App = () => {

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
    function logPlayer () {
      console.log(`logPlayer -> ${currentPlayer}`)
    }
  )

  return (
    // Container for the App
    <section className="App">
      <h1 className="App-header">Tic-Tac-Typescript</h1>
      <Board 
        board={ board }
        currentPlayer={ currentPlayer }
        setPlayer= { setPlayer }
        setBoard= { setBoard }
      />
    </section>
  )
}

export default App;
