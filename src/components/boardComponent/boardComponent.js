import React, { Component } from 'react';
import Square from '../squareComponent/squareComponent';
import GameHeader from '../gameHeaderComponent/gameHeaderComponent';
import './BoardComponent.css';
import Board from '../../board/board';

class BoardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Board(),
      value: 'X',
    };
  }

toggleMarker = (event) => {
  const squareIndex = event.target.id;
  let board = this.state.board;
  board.makeMark(squareIndex,this.state.value);
  this.setState({
    value: this.state.value === 'X' ? 'O' : 'X',
  });
}

render() {
  return (
    <div>
      <GameHeader />
      <div className="container">
        <div className="row">
          <div className="board-grid">
            {this.state.board.marks().map((mark, index) => {
              return (
                <Square
                  id={index}
                  value={mark}
                  key={index}
                  toggleMarker={this.toggleMarker}
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
