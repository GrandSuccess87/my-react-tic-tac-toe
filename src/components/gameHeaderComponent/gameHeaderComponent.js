import React, { Component } from 'react';
import './GameHeaderComponent.css';


class GameHeader extends Component {
  formatStatus = (status) => {
    switch(status) {
      case 'in progress':
        return 'keep playing!';
      case 'X wins':
        return 'YAAAAYY X WOOON!';
      case 'O wins':
        return 'GOOD JOB, O. YOU WON!';
      case 'draw':
        return 'It was a draw :/. Try again!';
      default:
        return '';
    }
  }

  render() {
    return (
      <div>
        {this.formatStatus(this.props.value)}
      </div>
    );
  }
}

export default GameHeader;
