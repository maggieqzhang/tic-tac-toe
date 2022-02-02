import React, { useState } from "react";
import RowComponent from "./Row";
import "./Board.css";

// parameters; always
// return values: almost always, certainly cant hurt
// variables: quite rarely
//   -unless you initialize with something that isn't representative of it's final type

const BoardComponent = (props: {
  onClickCell: (row: number, col: number) => void;
  cellValue: ("X" | "O" | null)[][];
}): JSX.Element => {
  return (
    <div className="Board">
      {[0, 1, 2].map((idx) => (
        <RowComponent
          key={idx.toString()}
          onClickCell={(row) => props.onClickCell(idx, row)}
          cellValue={props.cellValue[idx]}
        />
      ))}
    </div>
  );
};

export default BoardComponent;
