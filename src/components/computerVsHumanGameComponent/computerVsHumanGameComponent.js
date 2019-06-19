import React, { Component } from 'react';
import BoardComponent from '../boardComponent/boardComponent';
import GameHeader from '../gameHeaderComponent/gameHeaderComponent';
import '../boardComponent/BoardComponent.css';
import Board from '../../board/board';
import ButtonComponent from '../buttonComponent/buttonComponent';
import PhoenixApi from '../../services/phoenixAPI';
import Statuses from '../gameHeaderComponent/gameHeaderEnum';

class ComputerVsHumanGameComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Board(),
      computer: this.props.computerPlayer,
      human: 'O',
      gameStatus: Statuses.IN_PROGRESS,
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

      this.updateGameStatus(marks, next_player, current_player);
      this.checkForWinner();
      this.checkForComputerTurn();
    }

    computerMove = async () => {
      let board = this.state.board;
      this.computer.makeMove(board);

      let current_player = this.computer.symbol;
      let next_player = this.state.human;
      let marks = this.state.board.marks();

      this.updateGameStatus(marks, next_player, current_player);
      this.checkForWinner();
    }

    updateGameStatus = async (marks, next_player, current_player) => {
      this.setState({
        gameStatus: await PhoenixApi.getStatus(marks, next_player, current_player)
      });
    }

    checkForComputerTurn = () => {
      if(this.state.gameStatus === Statuses.IN_PROGRESS && next_player === this.computer.symbol){
        this.setState({
          gameStatus: Statuses.COMPUTER_THINKING
        });
        setTimeout( () => {this.computerMove();}, 1000);
      }
    }

    checkForWinner = async () => {
      if (this.state.gameStatus !== Statuses.IN_PROGRESS || this.state.gameStatus !== Statuses.COMPUTER_THINKING) {
        let data = await PhoenixApi.getWinningIndices(marks);
        this.highlightWinners(data.index_list);
      }
    }

    highlightWinners = async (winningCells) => {
      winningCells.forEach((index) => {
        let indexString = parseInt(index);
      document.getElementById(indexString).classList.add('highlight');
      })
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
