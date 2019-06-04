import React, { Component } from 'react';
import BoardComponent from '../boardComponent/boardComponent';
import '../boardComponent/BoardComponent.css';
import Computer from '../../computer/computer';
import Board from '../../board/board';
import PhoenixApi from '../../services/phoenixAPI';
import Square from '../squareComponent/squareComponent';

class ComputerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: new Board(),
            computer: new Computer('X'),
            human: 'O'
        };
    }

    humanMove = async (event) => {
        const squareIndex = event.target.id;
        let board = this.state.board;
        board.makeMark(squareIndex,this.state.human);
        let next_player = this.state.computer.symbol;
        let current_player = this.state.human;
        let marks = this.state.board.marks();
        this.setState({
          gameStatus: await PhoenixApi.getStatus(marks, next_player, current_player)
        });
        this.computerMove();
      }

    computerMove = async () => {
        let board = this.state.board
        let computer = this.state.computer
        computer.makeRandomMove(board, "");
        let current_player = computer.symbol;
        let next_player = this.state.human;
        let marks = this.state.board.marks();
        this.setState({
            gameStatus: await PhoenixApi.getStatus(marks, next_player, current_player)
        });
    }

    

    render() {
        return (
          <div>
              <BoardComponent humanMove={this.humanMove}
              />

              <Square humanMove={this.humanMove} />
          </div>
        );
    }
}

export default ComputerComponent;
