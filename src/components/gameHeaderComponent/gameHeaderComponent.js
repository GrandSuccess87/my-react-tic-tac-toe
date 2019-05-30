import React, { Component } from 'react';
import './GameHeaderComponent.css';
import Statuses from './gameHeaderEnum';


class GameHeader extends Component {

  formatStatus = (status) => {
    switch(status) {
    case Statuses.IN_PROGRESS:
      return 'keep playing!';
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
        {this.formatStatus(this.props.value)}
      </div>
    );
  }
}

export default GameHeader;
