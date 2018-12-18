import React, { useState } from 'react';
import Cell from './Cell';

const Board = () => {
  // Initial State of the Board
  const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  return (
    // Container for the Board
    <section className="Board">
      {
        board.map(
          (ea, index) => (
            <Cell
              key={ index }
              isTaken={ea}
            />
        ))
      }
    </section>
  )
}

export default Board;
