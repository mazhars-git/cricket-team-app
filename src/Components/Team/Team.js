import React from 'react';
import './Team.css';

const Team = (props) => {
    const cart = props.cart;
    console.log(cart.salary)

    const total = cart.reduce((total, pl) => Number(total + pl.salary), "");
    
    return (
        <div className="team-box">
            <h3>Team Members: {cart.length}</h3>
            <p>Total Budget: ${total}</p>
            <h4>Selected Players Name:</h4>
            {
                cart.map(player => <p>{player.name} <br/> <small>Salary: ${player.salary}</small></p>)
            }
            
        </div>
    );
};

export default Team;