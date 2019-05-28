import React, { Component } from 'react';
import './GameHeaderComponent.css';
import Rules from '../../rules/Rules';

class GameHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rules: new Rules(),
    };
  }
  render() {
    return (
      <div>
        <h2>Player 1's Turn</h2>
        <h2>Player 2's Turn</h2>
      </div>
    );
  }
}

export default GameHeader;
