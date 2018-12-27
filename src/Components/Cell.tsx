import React, { useEffect } from 'react';

interface CellProps {
  key: number;
  index: number;

  currentCellValue: number; // -1 = O, 1 = X, 0 = _
  isTaken: boolean;

  currentBoard: number[];
  setNewBoard: any;

  currentPlayer: String;
  togglePlayer: any;
}

const Cell: React.FC<CellProps> = (props) => {
  const {
    index,
    currentCellValue,
    currentBoard,
    currentPlayer, 
    togglePlayer,
    setNewBoard,
    isTaken
  } = props

  const play = (event: any) => {
    const cellIndex = event.target.dataset.key;

    (isTaken)
      ? null
      : togglePlayer();
        setNewBoard(currentBoard, Number(cellIndex));
    
  }

  return(
    <div 
      className="Cell"
      data-key={ index }
      data-istaken={ isTaken }
      onClick={ (event) => play(event) }>

      {
        (currentCellValue === 0) ?
          <span className="value">.</span> :
            (currentCellValue === -1) ?
              <span className="value">O</span> :
              <span className="value">X</span>
      }
    </div>
  );
};

export default Cell;