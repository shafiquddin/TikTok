
const GameBoard = ({ onSelectActive, board }) => {
    return <ol id="game-board">
        {board.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((player, colIndex) => <li key={colIndex}>
                    <button onClick={() => onSelectActive(rowIndex, colIndex)} disabled={player !== null}>{player}</button>
                </li>)}
            </ol>
        </li>)}
    </ol>
}

export default GameBoard