import React, { Component } from 'react';
import './GameHeaderComponent.css';
import Statuses from './gameHeaderEnum';
import Jumbotron from 'react-bootstrap/Jumbotron';



class GameHeader extends Component {

  formatStatus = (status, player) => {
    switch(status) {
    case Statuses.IN_PROGRESS:
      return `${player}'s Turn!`;
    case Statuses.X_WINS:
      return 'YAAAAYY X WOOON! 🥳 😝';
    case Statuses.O_WINS:
      return 'GOOD JOB, O. YOU WON! 🤩 🥰';
    case Statuses.DRAW:
      return 'It was a draw :/. Try again!';
    default:
      return '';
    }
  }

  render() {
    return (
      <Jumbotron>
        <h1 className="game-Header">
          {this.formatStatus(this.props.status, this.props.player)}
        </h1>
      </ Jumbotron>
    );
  }
}

export default GameHeader;
