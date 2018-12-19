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

  
  const setNewBoard = 
    (board: number[], boardIndex: number) => {
      const newCell = currentPlayer === "X" ? 1 : -1
      const newBoardState = [...board]
        .map(function updateCell(cell: number, index: number): number{
          return index === boardIndex ? cell = newCell : cell
        })
      
      setBoard(newBoardState)
  }

  return (
    <div className="Board">
      {board.map(
        (ea, index) => (
          <Cell
            key={ index }
            index= { index }
            currentCellValue={ ea }
            currentPlayer={ currentPlayer }
            currentBoard={ board }
            setNewBoard={ setNewBoard }
            togglePlayer={ togglePlayer }
          />
        )
      )}
    </div>
  )
}

export default Board;
