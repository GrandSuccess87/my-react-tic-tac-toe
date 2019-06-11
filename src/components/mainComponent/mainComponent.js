import React, { Component } from 'react';
import ButtonComponent from '../buttonComponent/buttonComponent'
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
          <ButtonComponent
            divClassName="start_game"
            linkClassName="human-page"
            id="start"
            url='./game/HumanVsHuman'
            buttonName="Human vs. Human"
          />
          <ButtonComponent
            divClassName="start_game"
            linkClassName="computer-page"
            id="start"
            url='./game/ComputerVsHuman'
            buttonName="Computer vs. Human"
          />
        </div>
      </div>
    );
  }
}

export default Main;
