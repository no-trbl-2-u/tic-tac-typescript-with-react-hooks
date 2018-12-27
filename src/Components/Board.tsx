import React, { useState } from 'react';
import Cell from './Cell';


interface BoardProps {
  board: number[];
  currentPlayer: string;
  setPlayer: any;
  setBoard: any;
}

// Board :: [Boolean] -> JSX
const Board: React.FC<BoardProps> = (props) => {
  const { board, setBoard, currentPlayer, setPlayer } = props
  
  // togglePlayer :: String State -> String State Change
  const togglePlayer = () => {
    currentPlayer === "X" ?
      setPlayer("O") :
      setPlayer("X") ;
  }

  
  function setNewBoard
    (board: number[], boardIndex: number){
      const newCell = currentPlayer === "X" ? 1 : -1
      const newBoardState = [...board]
        .map(
          function updateCell(cell: number, index: number)
          : number{ 
              return index === boardIndex 
                ? cell = newCell
                : cell
          }
        )
      console.log("Value of the new Cell -> " + newCell)
      setBoard(newBoardState);
  }

  return (
    <div className="Board">
      {board.map(
        (cell, index) => (
          <Cell
            key={ index }
            index={ index }
            currentCellValue={ cell }
            currentPlayer={ currentPlayer }
            currentBoard={ board }
            setNewBoard={ setNewBoard }
            togglePlayer={ togglePlayer }
            isTaken={
              cell === 0
                ? false
                : true
            }
          />
        )
      )}
    </div>
  )
}

export default Board;
