import React, { useEffect } from 'react';

interface CellProps {
  key: Number;
  isTaken: Boolean;
  currentPlayer: String;
  // currentValue: String;
}

const Cell: React.FC<CellProps> = (props) => {
  const { isTaken, currentPlayer } = props

  const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log('checked')
  }

  return(
    <div className="Cell" onClick={ event => clickHandler(event) }>
      {(isTaken) ? 
          <span className="value">
            { currentPlayer }
          </span>

          : null
      }
    </div>
  );
};

export default Cell;