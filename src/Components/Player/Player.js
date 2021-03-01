import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './Player.css';

const Player = (props) => {
    const {name, image, salary, job} = props.player;
    const playerAddHandler = props.playerAddHandler;
    return (
        <div className="player-box">
            <img src={image} alt=""/>
            <h4>{name}</h4>
            <p><small>{job}</small></p>
            <p>${salary}</p>
            <button className="btn-style"
            onClick={() => playerAddHandler(props.player)}
            ><FontAwesomeIcon icon={faPlusCircle} /></button>
        </div>
    );
};

export default Player;