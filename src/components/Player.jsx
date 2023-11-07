import { useState } from "react"

export default function Player({ initialName, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);
    const clickHandler = () => {
        setIsEditing((editing) => !editing);
    }
    const changeHandler = (event) => {
        setPlayerName(event.target.value)
    }
    return <li>
        <span className="player">
            {isEditing ? <input type="text" required value={playerName} onChange={changeHandler} /> : <span className="player-name">{playerName}</span>}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={clickHandler}>{isEditing ? 'save' : 'edit'}</button>
    </li>
}