import React, { Component } from 'react';
import BoardComponent from '../boardComponent/boardComponent';
import GameHeader from '../gameHeaderComponent/gameHeaderComponent';
import '../boardComponent/BoardComponent.css';
import Board from '../../board/board';
import PhoenixApi from '../../services/phoenixAPI';
import statuses from '../gameHeaderComponent/gameHeaderEnum';

class ComputerVsHumanGameComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Board(),
      human: 'O',
      gameStatus: statuses.IN_PROGRESS,
    };
  }

    componentDidMount = async () => {
      this.computerMove();
    };

    toggleMarker = async (event) => {
      const squareIndex = event.target.id;
      let board = this.state.board;
      board.makeMark(squareIndex,this.state.human);

      let next_player = this.props.computerPlayer.symbol;
      let current_player = this.state.human;
      let marks = this.state.board.marks();
      this.setState({
        gameStatus: await PhoenixApi.getStatus(marks, next_player, current_player),
      });

      if(this.state.gameStatus === statuses.IN_PROGRESS){
        this.setState({
          gameStatus: statuses.COMPUTER_THINKING
        });
        setTimeout( () => {this.computerMove();}, 1000);
      }
    }

    computerMove = async () => {
      let board = this.state.board;
      let computer = this.props.computerPlayer;
      let human = this.state.human;
      computer.makeMoveFromEndpoint(board, human);
      this.setState({
        gameStatus: await PhoenixApi.getStatus(board.marks(), human, computer),
      });
    }

    render() {
      return (
        <div>
          <GameHeader
            status={this.state.gameStatus}
            player={this.state.human}
          />
          <BoardComponent
            toggleMarker={this.toggleMarker}
            board={this.state.board}
            gameStatus={this.state.gameStatus}
          />
        </div>
      );
    }
}

export default ComputerVsHumanGameComponent;
