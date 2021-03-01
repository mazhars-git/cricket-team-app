import React from 'react';

const Team = (props) => {
    const cart = props.cart;

    let totalBudget = 0;
    for (let i = 0; i < cart.length; i++) {
        const player = cart[i];
        totalBudget = totalBudget + player.name;
        
    }
    return (
        <div>
            <h3>Team Member: {cart.length}</h3>
            <p>Budget: {totalBudget}</p>
        </div>
    );
};

export default Team;