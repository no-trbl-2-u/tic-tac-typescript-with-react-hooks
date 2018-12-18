import * as React from 'react';

interface CellProps {
  key: Number;
  isTaken: Number;
}

const Cell: React.FC<CellProps> = (props) => {
  const { key, isTaken } = props
  return(
    <div className="cell">
      <h1>{key}</h1>
    </div>
  );
};

export default Cell;