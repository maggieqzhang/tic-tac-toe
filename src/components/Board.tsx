import React, { useState } from "react";
import RowComponent from "./Row";
import injectSheet from "react-jss";
import "./Board.css";

// parameters; always
// return values: almost always, certainly cant hurt
// variables: quite rarely
//   -unless you initialize with something that isn't representative of it's final type

const BoardComponent = (props: {
  turn: string; // denotes what character to play in the grid;
  onClick: (row: number, col: number) => void;
  gameOver: string;
}): JSX.Element => {
  const boardIndices = [0, 1, 2];
  const board = boardIndices.map((idx) => (
    <RowComponent
      key={idx.toString()}
      turn={props.turn}
      onClick={(col) => props.onClick(col, idx)}
      gameOver={props.gameOver}
    ></RowComponent>
  ));

  return <div className="Board">{board}</div>;
};

export default BoardComponent;
