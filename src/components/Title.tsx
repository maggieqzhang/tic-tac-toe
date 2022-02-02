import React from "react";
import "./Title.css";

const TitleComponent = (props: { gameOver: "X" | "O" | null }) => {
  return props.gameOver === null ? (
    <h1 className="title">Hello, Welcome to Tic-Tac-Toe!</h1>
  ) : (
    <h1 className="title">Congrats, the winner is {props.gameOver}</h1>
  );
};

export default TitleComponent;
