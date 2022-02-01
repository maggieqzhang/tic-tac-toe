import React, { useState } from "react";
import injectSheet from "react-jss";
import "./Grid.css";

// specify the X and O's (maybe use my face and grant's face)

const GridComponent = (props: {
  value: string;
  onClick: () => void;
  gameOver: string;
}) => {
  const [gridValue, setGridValue] = useState("");

  return (
    <button
      className="grid"
      onClick={() => {
        // only update if the grid hasn't been filled before. Don't allow to change
        gridValue === "" && props.gameOver === ""
          ? (setGridValue(props.value), props.onClick())
          : null;
      }}
    >
      {gridValue}
    </button>
  );
};

export default GridComponent;
