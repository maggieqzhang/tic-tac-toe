import React from "react";
import injectSheet from "react-jss";

const STYLES = {
  grid: {
    border: "3px solid black",
    fontSize: "7vw",
    width: "10vw",
    height: "10vw",
  },
};

const GridComponent = (props: {
  onClickCell: () => void;
  cellValue: "X" | "O" | null;
  classes: { [K in keyof typeof STYLES]: string };
}): JSX.Element => {
  return (
    <button className={props.classes.grid} onClick={props.onClickCell}>
      {props.cellValue}
    </button>
  );
};

export const Grid = injectSheet(STYLES)(GridComponent);
