import React, { Component } from 'react';
import Board from "../boardComponent/boardComponent";
import logo from '../../images/game-logo3.png';


class Main extends Component {

        constructor() {
        super(); 
        this.state = {
            show: false,
            disabled: false // button will not be disabled
        }; 
    }

    toggleBoard = (e) => {
        const { show } = this.state;
        this.setState({show: !show}) 

    }

    handleClick = () => {
        // button will be disabled
        this.setState({disabled: !this.state.disabled});
    }

    render() {
        return (
            <div>
            <div className="App-header">
                <h2>Welcome to React Tic Tac Toe</h2>
                <img src={logo} className="App-logo" alt="logo" /> <br />
                <div className="start_game">
                <button type="button" onClick={this.toggleBoard} className="btn btn-outline-primary">Start Game</button>
                {this.state.show ? <Board /> : <span /> }
                

                </div>
                </div>
          </div>
        );
    }
}

export default Main;