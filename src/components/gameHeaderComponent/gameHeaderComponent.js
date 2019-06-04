import React, { Component } from 'react';
import './GameHeaderComponent.css';
import Statuses from './gameHeaderEnum';


class GameHeader extends Component {

  formatStatus = (status, player) => {
    switch(status) {
    case Statuses.IN_PROGRESS:
      return `${player}'s Turn!`;
    case Statuses.X_WINS:
      return 'YAAAAYY X WOOON!';
    case Statuses.O_WINS:
      return 'GOOD JOB, O. YOU WON!';
    case Statuses.DRAW:
      return 'It was a draw :/. Try again!';
    default:
      return '';
    }
  }

  render() {
    return (
      <div>
        {this.formatStatus(this.props.status, this.props.player)}
      </div>
    );
  }
}

export default GameHeader;
