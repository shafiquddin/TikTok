import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"

function App() {
  const [activePlayer, setActivePalyer] = useState('X');

  const onHandleActive = () => {
    setActivePalyer((activePlayer) => activePlayer === 'X' ? 'O' : 'X');
  }

  return (<main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName='Player 1' symbol='X' activePlayer={activePlayer === 'X'} />
        <Player initialName='Player 2' symbol='O' activePlayer={activePlayer === 'O'} />
      </ol>
      <GameBoard onSelectActive={onHandleActive} activePlayerSymbol={activePlayer} />
    </div >
  </main >
  )
}

export default App
