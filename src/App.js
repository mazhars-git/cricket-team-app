import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    const newCart = [...cart, player];
    setCart(newCart);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          All Players: {players.length}
        </h1>
              <Team cart={cart}></Team>
          <div className="players-box container d-flex justify-content-center">
              {
                players.map(player => <Player
                  player = {player} 
                  key ={player.id}
                  playerAddHandler={playerAddHandler}
                  ></Player>)
              }
          </div>
      </header>
    </div>
  );
}

export default App;
