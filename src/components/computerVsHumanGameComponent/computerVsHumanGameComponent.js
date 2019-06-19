import React, { Component } from 'react';
import BoardComponent from '../boardComponent/boardComponent';
import GameHeader from '../gameHeaderComponent/gameHeaderComponent';
import '../boardComponent/BoardComponent.css';
import Board from '../../board/board';
import ButtonComponent from '../buttonComponent/buttonComponent';
import PhoenixApi from '../../services/phoenixAPI';
import statuses from '../gameHeaderComponent/gameHeaderEnum';

class ComputerVsHumanGameComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Board(),
      computer: this.props.computerPlayer,
      human: 'O',
      gameStatus: statuses.IN_PROGRESS,
    };
  }

    componentDidMount() {
      this.computerMove();
    };

    toggleMarker = async (event) => {
      const squareIndex = event.target.id;
      let board = this.state.board;
      board.makeMark(squareIndex,this.state.human);

      let next_player = this.state.computer.symbol;
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
      let human = this.state.human;
      await this.state.computer.makeMove(board, human);
      this.setState({
        gameStatus: await PhoenixApi.getStatus(board.marks(), human, this.state.computer.symbol),
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
          <ButtonComponent
            divClassName="restart_game"
            id="restart"
            buttonName="Restart Game"
            url="./ComputerVsHuman"
          />
        </div>
      );
    }
}

export default ComputerVsHumanGameComponent;
