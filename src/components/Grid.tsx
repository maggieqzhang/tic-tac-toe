import React, { useState } from "react";
import "./Grid.css";

// specify the X and O's (maybe use my face and grant's face)

const GridComponent = (props: {
  value: string;
  onClick: () => void;
  gameOver: string | null;
  restartGame: boolean;
}) => {
  const [gridValue, setGridValue] = useState("");

  React.useEffect(() => {
    if (props.restartGame) {
      setGridValue("");
    }
  }, [props.restartGame]);

  return (
    <button
      className="grid"
      onClick={() => {
        // only update if the grid hasn't been filled before. Don't allow to change
        gridValue === "" && props.gameOver === null
          ? (setGridValue(props.value), props.onClick())
          : null;
      }}
    >
      {gridValue}
    </button>
  );
};

export default GridComponent;
