import React, { Component } from 'react';
import Square from '../squareComponent/squareComponent';
import GameHeader from '../gameHeaderComponent/gameHeaderComponent';
import './BoardComponent.css';
import Board from '../../board/board';
import PhoenixApi from '../../services/phoenixAPI';


class BoardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Board(),
      value: 'X',
      gameStatus: ''
    };
  }


  componentDidMount = async () => {
    let next_player = this.state.value === 'X' ? 'O' : 'X'
    let marks = this.state.board.marks()
    console.log(marks)
    this.setState({
      gameStatus: this.state.gameStatus = await PhoenixApi.requestStatus(marks, next_player, this.state.value)
    })
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
      <GameHeader 
        value={this.state.gameStatus}
      />
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
