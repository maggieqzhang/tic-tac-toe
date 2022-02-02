import React, { useState } from "react";
import GridComponent from "./Grid";
import "./Row.css";

const RowComponent = (props: {
  onClickCell: (index: number) => void;
  cellValue: ("X" | "O" | null)[];
}): JSX.Element => {
  return (
    <div className="row">
      {[0, 1, 2].map((idx) => (
        <GridComponent
          key={idx.toString()}
          onClickCell={() => props.onClickCell(idx)}
          cellValue={props.cellValue[idx]}
        />
      ))}
    </div>
  );
};

export default RowComponent;
