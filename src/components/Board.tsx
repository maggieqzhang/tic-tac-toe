import React from "react";
import { Row } from "./Row";
import injectSheet from "react-jss";

const STYLES = {
  board: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
  },
};

const BoardComponent = (props: {
  onClickCell: (row: number, col: number) => void;
  cellValue: ("X" | "O" | null)[][];
  classes: { [K in keyof typeof STYLES]: string };
}): JSX.Element => {
  return (
    <div className={props.classes.board}>
      {[0, 1, 2].map((idx) => (
        <Row
          key={idx.toString()}
          onClickCell={(row) => props.onClickCell(idx, row)}
          cellValue={props.cellValue[idx]}
        />
      ))}
    </div>
  );
};

export const Board = injectSheet(STYLES)(BoardComponent);
