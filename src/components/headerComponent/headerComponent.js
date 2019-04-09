import React, { Component } from 'react';
import logo from '../../images/game-logo3.png';


class Header extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                <h1 className="display-4 App-intro">Hello, React Enthusiasts!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Click to Play</a>
                </p>
            </div>
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