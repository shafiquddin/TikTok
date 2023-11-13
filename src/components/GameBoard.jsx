import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

const GameBoard = ({ onSelectActive, turns }) => {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // const onClickBoardHandler = (rowIndex, colIndex) => {
    //     setGameBoard((preGameBoard) => {
    //         const updateBoard = [...preGameBoard.map(innerArray => [...innerArray])];
    //         updateBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updateBoard;
    //     }
    //     )
    //     onSelectActive();
    // }

    let gameBoard = initialGameBoard;

    for (let turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player
    }

    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((player, colIndex) => <li key={colIndex}>
                    <button onClick={() => onSelectActive(rowIndex, colIndex)}>{player}</button>
                </li>)}
            </ol>
        </li>)}
    </ol>
}

export default GameBoard