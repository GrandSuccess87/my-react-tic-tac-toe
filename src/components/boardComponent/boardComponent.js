import React, { Component } from 'react';
import Square from '../squareComponent/squareComponent';
import './BoardComponent.css';
import Statuses from '../gameHeaderComponent/gameHeaderEnum';


class BoardComponent extends Component {

render() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="board-grid game-status"
            disabled={this.props.gameStatus !== Statuses.IN_PROGRESS}
          >
            {this.props.board.marks().map((mark, index) => {
              return (
                <Square
                  id={index}
                  value={mark}
                  key={index}
                  toggleMarker={this.props.toggleMarker}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default BoardComponent;
