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
      </div>
    );
  }
}

export default GameHeader;
