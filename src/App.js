import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import playersData from './PlayersData/PlayersData.json';
import Player from './Components/Player/Player';
import Team from './Components/Team/Team';


function App() {
  const [players, setPlayers] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setPlayers(playersData);
  }, []);

  const playerAddHandler = (player) =>{
    const addedPlayer = [...cart, player];
    setCart(addedPlayer);
    console.log(addedPlayer)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Total Players: {players.length}
        </h1>
        <h3>Added Player: {cart.length}</h3>
        <Team cart={cart}></Team>
        <div className="players">
            {
              players.map(player => <Player 
                player = {player} 
                playerAddHandler={playerAddHandler}
                ></Player>)
            }
        </div>
      </header>
    </div>
  );
}

export default App;
