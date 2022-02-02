import React, { useState } from "react";
import "./Grid.css";

const GridComponent = (props: {
  onClickCell: () => void;
  cellValue: "X" | "O" | null;
}): JSX.Element => {
  return (
    <button className="grid" onClick={props.onClickCell}>
      {props.cellValue}
    </button>
  );
};

export default GridComponent;
