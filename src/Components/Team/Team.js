import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './Team.css';

const Team = (props) => {
    const cart = props.cart;

    const total = cart.reduce((total, player) => Number(total + player.salary), "");
    
    return (
        <div className="team-box">
            <h3>Team Members: {cart.length}</h3>
            <p>Total Budget: ${total}</p>
            <h4>Selected Players Name:</h4>
            {
              cart.map(player => 
              <p><FontAwesomeIcon icon={faCheckCircle} /> {player.name} 
              <br/> 
              <small>Salary: ${player.salary}
              </small></p>)
            }
        </div>
    );
};

export default Team;