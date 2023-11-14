import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";

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

  const activePlayer = derivedActivePlayer(gameTurns);

  const onHandleActive = (rowIndex, colIndex) => {
    // setActivePalyer((activePlayer) => activePlayer === 'X' ? 'O' : 'X');
    setGameTurns((preTurns) => {
      const currentPlayer = derivedActivePlayer(preTurns);
      const updated = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...preTurns];
      return updated;
    })
  }

  return (<main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName='Player 1' symbol='X' activePlayer={activePlayer === 'X'} />
        <Player initialName='Player 2' symbol='O' activePlayer={activePlayer === 'O'} />
      </ol>
      <GameBoard onSelectActive={onHandleActive} turns={gameTurns} />
    </div >
    <Log turns={gameTurns} />
  </main >
  )
}

export default App
