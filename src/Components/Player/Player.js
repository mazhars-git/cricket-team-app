import React, { useState } from 'react';
import './Player.css';

const Player = (props) => {
    const {name, image, salary, job} = props.player;
    const [clicked, setClicked] = useState(false);
    const playerAddHandler = props.playerAddHandler;
    
    return (
        <div className="player-box">
            <img src={image} alt=""/>
            <h4>{name}</h4>
            <p><small>{job}</small></p>
            <p>${salary}</p>

            <button disabled={clicked}
                className="btn-style"
                onClick={() => {
                    playerAddHandler(props.player)
                    setClicked(true)
                }}>
                {clicked ? "already selected" : "select player" }
            </button>
        </div>
    );
};

export default Player;