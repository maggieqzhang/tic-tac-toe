import React, { useState } from "react";
import GridComponent from "./Grid";
import "./Row.css";

const RowComponent = (props: {
  turn: string; // denotes what character to play in the grid;
  onClick: (index: number) => void;
  gameOver: string | null;
  restartGame: boolean;
}): JSX.Element => {
  const rowIndices = [0, 1, 2];

  const row = rowIndices.map((idx) => (
    <GridComponent
      key={idx.toString()}
      value={props.turn}
      onClick={() => props.onClick(idx)}
      gameOver={props.gameOver}
      restartGame={props.restartGame}
    ></GridComponent>
  ));

  return <div className="row">{row}</div>;
};

export default RowComponent;
