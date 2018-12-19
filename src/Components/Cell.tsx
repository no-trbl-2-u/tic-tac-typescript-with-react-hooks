import React, { useEffect } from 'react';

interface CellProps {
  key: number;
  index: number;
  currentCellValue: number;
  currentPlayer: String;
  currentBoard: number[];
  setNewBoard: any;
  togglePlayer: any;
}

const Cell: React.FC<CellProps> = (props) => {
  const {
    index,
    currentCellValue,
    currentBoard,
    currentPlayer, 
    togglePlayer,
    setNewBoard
  } = props

  const handleClick = (event: React.MouseEvent) => {
    const cellIndex = event.target
    // console.log(cellIndex)
    
    togglePlayer();
    
    setNewBoard(currentBoard, 5);
    
  }

  return(
    <div 
      className="Cell"
      data-key= { index }
      onClick={ (event) => handleClick(event) }>

      {
        (currentCellValue === 0) ?
          <span className="value"></span> :
            (currentCellValue === -1) ?
              <span className="value">O</span> :
              <span className="value">X</span>
      }
    </div>
  );
};

export default Cell;