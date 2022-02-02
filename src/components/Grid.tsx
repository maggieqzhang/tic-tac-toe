import React, { useState } from "react";
import "./Grid.css";

const GridComponent = (props: {
  value: string;
  onClick: () => void;
  gameOver: string | null;
  cellValue: "X" | "O" | null;
}) => {
  return (
    <button className="grid" onClick={props.onClick}>
      {props.cellValue}
    </button>
  );
};

export default GridComponent;
