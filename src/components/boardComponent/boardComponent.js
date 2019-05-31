import React, { Component } from 'react';
import Square from '../squareComponent/squareComponent';
import GameHeader from '../gameHeaderComponent/gameHeaderComponent';
import './BoardComponent.css';
import Board from '../../board/board';
import PhoenixApi from '../../services/phoenixAPI';
import Statuses from '../gameHeaderComponent/gameHeaderEnum';


class BoardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Board(),
      value: 'X',
      gameStatus: Statuses.IN_PROGRESS,
    };
  }

toggleMarker = async (event) => {
  const squareIndex = event.target.id;
  let board = this.state.board;
  board.makeMark(squareIndex,this.state.value);
  this.setState({
    value: this.state.value === 'X' ? 'O' : 'X',
  });
  let next_player = this.state.value === 'X' ? 'O' : 'X';
  let current_player = this.state.value;
  let marks = this.state.board.marks();
  this.setState({
    gameStatus: await PhoenixApi.getStatus(marks, next_player, current_player)
  });
}

render() {
  return (
    <div>
      <GameHeader
        status={this.state.gameStatus}
        player={this.state.value}
      />
      <div className="container">
        <div className="row">
          <div
            className="board-grid game-status"
            disabled={this.state.gameStatus !== Statuses.IN_PROGRESS}
          >
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
