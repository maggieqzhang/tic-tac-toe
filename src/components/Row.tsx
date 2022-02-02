import React, { useState } from "react";
import { Grid } from "./Grid";
import injectSheet from "react-jss";

const STYLES = {
  row: {
    display: "flex",
    justifyContent: "center",
  },
};

const RowComponent = (props: {
  onClickCell: (index: number) => void;
  cellValue: ("X" | "O" | null)[];
  classes: { [K in keyof typeof STYLES]: string };
}): JSX.Element => {
  return (
    <div className={props.classes.row}>
      {[0, 1, 2].map((idx) => (
        <Grid
          key={idx.toString()}
          onClickCell={() => props.onClickCell(idx)}
          cellValue={props.cellValue[idx]}
        />
      ))}
    </div>
  );
};

export const Row = injectSheet(STYLES)(RowComponent);
