import React from "react";
import injectSheet from "react-jss";

const STYLES = {
  title: {
    marginTop: 0,
    color: "gold",
    fontSize: "5vw",
    fontFamily: "Comic Sans MS, Comic Sans cursive",
  },
};

const TitleComponent = (props: {
  winner: "X" | "O" | null;
  classes: { [K in keyof typeof STYLES]: string };
}) => {
  return props.winner === null ? (
    <h1 className={props.classes.title}>Hello, Welcome to Tic-Tac-Toe!</h1>
  ) : (
    <h1 className={props.classes.title}>
      Congrats, the winner is {props.winner}
    </h1>
  );
};

export const Title = injectSheet(STYLES)(TitleComponent);
