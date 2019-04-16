import React, { Component } from 'react';
import logo from '../../images/game-logo3.png';


class Header extends Component {
    render() {
        return (
            <div>
            <div className="App-header">
                <h2>Welcome to React Tic Tac Toe</h2>

                <img src={logo} className="App-logo" alt="logo" />
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
          </div>
        );
    }
}

export default Header;