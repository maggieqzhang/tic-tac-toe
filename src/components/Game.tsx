import React, { useState } from "react";
import BoardComponent from "./Board";
import TitleComponent from "./Title";
import "./Board.css";

const GameComponent = (): JSX.Element => {
  const [currentTurn, setCurrentTurn] = useState<"X" | "O">("X");
  const [board, setBoard] = useState<("X" | "O" | null)[][]>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const getWinningPlayer = (): "X" | "O" | null => {
    //check for rows + columns to see if player won on turn //make the opposite for turn because turn should've been updated
    const prevTurn = currentTurn === "X" ? "O" : "X";
    for (let i = 0; i < 3; i++) {
      let rowWinCount = 0;
      let colWinCount = 0;
      for (let j = 0; j < 3; j++) {
        rowWinCount += board[i][j] === prevTurn ? 1 : 0;
        colWinCount += board[j][i] === prevTurn ? 1 : 0;
      }
      if (rowWinCount === 3 || colWinCount === 3) {
        return prevTurn;
      }
    }
    //check for diagonals
    let leftDiagWinCount = 0;
    let rightDiagWinCount = 0;
    for (let i = 0; i < 3; i++) {
      leftDiagWinCount += board[i][i] === prevTurn ? 1 : 0;
      rightDiagWinCount += board[i][2 - i] === prevTurn ? 1 : 0;
    }
    if (leftDiagWinCount === 3 || rightDiagWinCount === 3) {
      return prevTurn;
    }
    return null;
  };

  const updateGame = (row: number, col: number): void => {
    if (board[row][col] !== null) {
      return;
    }
    if (winningPlayer !== null) {
      return;
    }
    const newBoard = board;
    newBoard[row][col] = currentTurn;
    setCurrentTurn(currentTurn === "X" ? "O" : "X");
    setBoard(newBoard);
  };

  const restartGame = (): void => {
    setBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
  };

  const winningPlayer = getWinningPlayer();

  return (
    <>
      <TitleComponent winner={winningPlayer} />
      <BoardComponent onClickCell={updateGame} cellValue={board} />
      <h2 className="title">Current Player: {currentTurn}</h2>
      <button onClick={restartGame}>Click Here to Restart Game</button>
    </>
  );
};

export default GameComponent;
