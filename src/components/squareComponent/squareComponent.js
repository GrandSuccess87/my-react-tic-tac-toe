import React, { Component } from 'react';
import './SquareComponent.css';

class Square extends Component {

  render() {
    return (
      <div
        onClick={this.props.toggleMarker}
        disabled={this.props.value}
        className="game-spaces space"
        id={this.props.id}>
        {this.props.value}
      </div>
    );
  }
}

export default Square;
