import React, { Component } from 'react';
import Board from '../boardComponent';

class Game extends Component {

    render() {
        return (
            <div className="Game">

                <div className="Game_Board">
                    <Board />
                </div>

            </div>

        );
    }

}


export default Game;