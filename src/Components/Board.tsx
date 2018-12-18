import React, { useState } from 'react';
import Cell from './Cell';


interface BoardProps {
  board: boolean[];
  currentPlayer: string;
}

// Board :: [Number] -> JSX
const Board: React.FC<BoardProps> = (props) => {
  const { board, currentPlayer } = props
  
  return (
    <div className="Board">
      {board.map(
        (ea, index) => (
          <Cell
            key={ index }
            isTaken={ea}
            currentPlayer={ currentPlayer }
          />
        )
      )}
    </div>
  )
}

export default Board;
