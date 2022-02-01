import React, { useState } from "react";
import BoardComponent from "./Board";
import TitleComponent from "./Title";
import injectSheet from "react-jss";
import "./Board.css";

const STYLES = {};

// specify the X and O's (maybe use my face and grant's face)

const GameComponent = () => {
  const [currentTurn, setCurrentTurn] = useState("X");
  const [winner, setWinner] = useState("");
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const alertWin = (winner: string): void => {
    const winMessage = "Player " + winner + " won the game!";
    setWinner(winner);
    alert(winMessage);
  };

  const checkWin = (row: number, col: number, turn: string): void => {
    const boardCopy = board;
    boardCopy[row][col] = turn;

    //check for rows + columns to see if player won on turn
    for (let i = 0; i < 3; i++) {
      let rowWinCount = 0;
      let colWinCount = 0;
      for (let j = 0; j < 3; j++) {
        rowWinCount += boardCopy[i][j] === turn ? 1 : 0;
        colWinCount += boardCopy[j][i] === turn ? 1 : 0;
      }
      if (rowWinCount === 3 || colWinCount === 3) {
        alertWin(turn);
      }
    }

    //check for diagonals
    let leftDiagWinCount = 0;
    let rightDiagWinCount = 0;
    for (let i = 0; i < 3; i++) {
      leftDiagWinCount += boardCopy[i][i] === turn ? 1 : 0;
      rightDiagWinCount += boardCopy[i][2 - i] === turn ? 1 : 0;
    }
    if (leftDiagWinCount === 3 || rightDiagWinCount === 3) {
      alertWin(turn);
    }

    setBoard(boardCopy);
  };

  const changeTurn = (col: number, row: number): void => {
    if (!winner) {
      const newTurn = currentTurn === "X" ? "O" : "X";
      setCurrentTurn(newTurn);
      checkWin(row, col, currentTurn);
    }
  };

  return (
    <>
      <TitleComponent />
      <BoardComponent
        turn={currentTurn}
        onClick={changeTurn}
        gameOver={winner}
      />
    </>
  );
};

export const Game = injectSheet(STYLES)(GameComponent);
