import React, { Component } from 'react';
import Board from "../boardComponent/boardComponent";
import logo from '../../images/game-logo3.png';


class Main extends Component {

        constructor(props) {
        super(props) 
        this.state = {
            show: false
        
        } 
    }

    toggleDiv = (e) => {
        e.preventDefault();
        const { show } = this.state;
        this.setState({show: !show}) 

    }

    render() {
        return (
            <div>
            <div className="App-header">
                <h2>Welcome to React Tic Tac Toe</h2>
                <img src={logo} className="App-logo" alt="logo" /> <br />
                <div className="start_game">
                    <button type="button" onClick={this.toggleDiv} className="btn btn-outline-primary">Start Game</button>
                    {this.state.show && <Board /> } 

                </div>
                </div>
          </div>
        );
    }
}

export default Main;