import { useState } from "react"

export default function Player({ initialName, symbol, activePlayer, onNameChange }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);
    const clickHandler = () => {
        setIsEditing((editing) => !editing);
        if (isEditing) {
            onNameChange(symbol, playerName);
        }
    }
    const changeHandler = (event) => {
        setPlayerName(event.target.value)
    }
    return <li className={activePlayer ? 'active' : undefined}>
        <span className="player">
            {isEditing ? <input type="text" required value={playerName} onChange={changeHandler} /> : <span className="player-name">{playerName}</span>}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={clickHandler}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
}