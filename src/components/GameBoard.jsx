import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const onClickBoardHandler = (rowIndex, colIndex) => {
        setGameBoard((preGameBoard) => {
            const updateBoard = [...preGameBoard.map(innerArray => [...innerArray])];
            updateBoard[rowIndex][colIndex] = 'X';
            return updateBoard;
        }
        )
    }

    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                    <button onClick={() => onClickBoardHandler(rowIndex, colIndex)}>{playerSymbol}</button>
                </li>)}
            </ol>
        </li>)}
    </ol>
}

export default GameBoard