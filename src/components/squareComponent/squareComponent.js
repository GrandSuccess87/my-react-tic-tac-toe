import React, { Component } from 'react';
import './squareComponent.css';

class Square extends Component {

  render() {
    return (
      <div
        onClick={this.props.toggleMarker}
        disabled={this.props.value != null}
        className="game-spaces space"
        id={this.props.id}>
        {this.props.value}
      </div>
    );
  }
}

export default Square;
