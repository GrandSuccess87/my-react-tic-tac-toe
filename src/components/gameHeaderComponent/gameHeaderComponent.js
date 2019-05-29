import React, { Component } from 'react';
import './GameHeaderComponent.css';


class GameHeader extends Component {
  render() {
    return (
      <div>
        {this.props.value}
      </div>
    );
  }
}

export default GameHeader;
