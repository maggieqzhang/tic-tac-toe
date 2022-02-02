import React from "react";
import "./Title.css";

const TitleComponent = (props: { winner: "X" | "O" | null }) => {
  return props.winner === null ? (
    <h1 className="title">Hello, Welcome to Tic-Tac-Toe!</h1>
  ) : (
    <h1 className="title">Congrats, the winner is {props.winner}</h1>
  );
};

export default TitleComponent;
