import React, { useState } from "react";
import BoardComponent from "./Board";
import TitleComponent from "./Title";
import "./Board.css";
// specify the X and O's (maybe use my face and grant's face)

const GameComponent = () => {
  const [currentTurn, setCurrentTurn] = useState<"X" | "O">("X");
  const [board, setBoard] = useState<("X" | "O" | null)[][]>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [restart, setRestart] = useState(false);

  const alertWin = (winner: "X" | "O" | null): void => {
    const winMessage = `Player ${winner} won the game!`;
    alert(winMessage);
  };

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

  const updateGame = (col: number, row: number): void => {
    const newBoard = board;
    newBoard[col][row] = currentTurn;
    setCurrentTurn(currentTurn === "X" ? "O" : "X");
    setBoard(newBoard);
  };

  const restartGame = (): void => {
    setRestart(true); //missing logic here to fix this if it's already set to restart!
    setBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
  };

  const winningPlayer = getWinningPlayer(); // try to get rid of the fact that this is firing twice!!! instead of once heck!
  if (winningPlayer) {
    alertWin(winningPlayer);
  }

  return (
    <>
      <TitleComponent />
      <BoardComponent
        turn={currentTurn}
        onClick={updateGame}
        gameOver={winningPlayer}
        restartGame={restart}
      />
      <button onClick={restartGame}>Click here to Restart Game</button>
    </>
  );
};

export default GameComponent;
