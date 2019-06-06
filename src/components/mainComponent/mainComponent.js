import React, { Component } from 'react';
import logo from '../../images/game-logo3.png';
import './mainComponent.css';

class Main extends Component {

  render() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <h2>Welcome to React Tic Tac Toe</h2>
          <br/>
          <div className="start_game">
            <a className="human-page" href="./game/HumanVsHuman"><span><div id="start">Human vs. Human</div></span></a>
          </div>
          <div className="start_game">
            <a className="computer-page" href="./game/ComputerVsHuman"><span><div id="start">Computer vs. Human</div></span></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
