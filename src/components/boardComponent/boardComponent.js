import React, { Component } from 'react';
import Square from '../squareComponent/squareComponent';
import GameHeader from '../gameHeaderComponent/gameHeaderComponent';
import './boardComponent.css';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'X',
      squares: [...Array(9)].map((square, index) => {
        return { id: index, value: null};
      })
    };
  }

toggleMarker = (event) => {
  const squareIndex = event.target.id;
  const squaresArray = this.state.squares;
  squaresArray.splice(
    squareIndex,
    1,
    { id: squareIndex, value: this.state.value }
  );
  this.setState({
    value: this.state.value === 'X' ? 'O' : 'X',
    squares: squaresArray
  });
}

render() {
  return (
    <div>
      <GameHeader />
      <div className="container">
        <div className="row">
          <div className="board-grid">
            {this.state.squares.map((square) => {
              return (
                <Square
                  value={square.value}
                  id={square.id}
                  key={square.id}
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
