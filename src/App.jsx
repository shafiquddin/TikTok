import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from './WinningCombination.js';
import GameOver from "./components/GameOver.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function derivedActivePlayer(gameTurn) {
  let currentPlayer = 'X';
  if (gameTurn.length > 0 && gameTurn[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePalyer] = useState('X');

  let gameBoard = [...initialGameBoard.map(array => [...array])];

  for (let turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player
  }
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol;
    }
  }

  const activePlayer = derivedActivePlayer(gameTurns);
  const hasDraw = gameTurns.length === 9 && !winner;

  const onHandleActive = (rowIndex, colIndex) => {
    // setActivePalyer((activePlayer) => activePlayer === 'X' ? 'O' : 'X');
    setGameTurns((preTurns) => {
      const currentPlayer = derivedActivePlayer(preTurns);
      const updated = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...preTurns];
      return updated;
    })
  }

  const onRematchHandler = () => {
    setGameTurns([]);
  }

  return (<main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName='Player 1' symbol='X' activePlayer={activePlayer === 'X'} />
        <Player initialName='Player 2' symbol='O' activePlayer={activePlayer === 'O'} />
      </ol>
      {(winner || hasDraw) && <GameOver winner={winner} onRematch={onRematchHandler} />}
      <GameBoard onSelectActive={onHandleActive} board={gameBoard} />
    </div >
    <Log turns={gameTurns} />
  </main >
  )
}

export default App
