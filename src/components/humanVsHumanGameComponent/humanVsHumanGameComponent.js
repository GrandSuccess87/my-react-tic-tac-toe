import React, { Component } from 'react';
import BoardComponent from '../boardComponent/boardComponent';
import GameHeader from '../gameHeaderComponent/gameHeaderComponent';
import '../boardComponent/BoardComponent.css';
import Board from '../../board/board';
import PhoenixApi from '../../services/phoenixAPI';
import ButtonComponent from '../buttonComponent/buttonComponent';
import Statuses from '../gameHeaderComponent/gameHeaderEnum';

class HumanVsHumanGameComponent extends Component {
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
      <BoardComponent
        toggleMarker={this.toggleMarker}
        board={this.state.board}
        gameStatus={this.state.gameStatus}
      />
      <ButtonComponent
        divClassName="restart_game"
        id="restart"
        buttonName="Restart Game"
        url="./HumanVsHuman"
      />
    </div>
  );
}
}

export default HumanVsHumanGameComponent;
