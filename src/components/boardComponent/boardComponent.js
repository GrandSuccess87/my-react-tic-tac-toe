import React, { Component } from 'react';
import Square from '../squareComponent/squareComponent';
import GameHeader from '../gameHeaderComponent/gameHeaderComponent';
import './BoardComponent.css';
import BoardState from '../../boardState/boardState';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardState: new BoardState(),
      value: 'X',
    };
  }

toggleMarker = (event) => {
  const squareIndex = event.target.id;
  let boardState = this.state.boardState;
  boardState.mark(squareIndex,this.state.value);
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
            {this.state.boardState.currentBoard().map((mark, index) => {
              // console.log(this.state.boardState.currentBoard());
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

export default Board;
