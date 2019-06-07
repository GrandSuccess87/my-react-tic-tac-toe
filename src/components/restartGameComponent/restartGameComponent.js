import React, { Component } from 'react';
import './restartGameComponent.css';

class RestartGameComponent extends Component {

  render() {
    return (
      <div className="restart_game">
        <div
          id="restart"
          onClick={this.props.restartGame}
        >Restart Game</div>
      </div>
    );
  }
}

export default RestartGameComponent;