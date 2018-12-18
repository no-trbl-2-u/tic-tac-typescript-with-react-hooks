import React, { useEffect } from 'react';

interface CellProps {
  key: Number;
  isTaken: Boolean;
  currentPlayer: String;
}

const Cell: React.FC<CellProps> = (props) => {
  const { isTaken, currentPlayer } = props

  useEffect( () => {
    const cells = document.querySelectorAll('.Cell');
    cells.forEach(cell => {
      cell.addEventListener('click', event => {
        console.log(event.target)
      })
    });
  });

  return(
    <div className="Cell">
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