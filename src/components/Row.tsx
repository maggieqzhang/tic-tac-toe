import React, { useState } from "react";
import GridComponent from "./Grid";
import "./Row.css";

const RowComponent = (props: {
  turn: string; // denotes what character to play in the grid;
  onClick: (index: number) => void;
  gameOver: string | null;
  cellValue: ("X" | "O" | null)[];
}): JSX.Element => {
  const rowIndices = [0, 1, 2];

  const row = rowIndices.map((idx) => (
    <GridComponent
      key={idx.toString()}
      value={props.turn}
      onClick={() => props.onClick(idx)}
      gameOver={props.gameOver}
      cellValue={props.cellValue[idx]}
    ></GridComponent>
  ));
  console.log(props.cellValue);

  return <div className="row">{row}</div>;
};

export default RowComponent;
