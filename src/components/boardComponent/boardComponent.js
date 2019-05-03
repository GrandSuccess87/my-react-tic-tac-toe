
import React, { Component } from 'react';
import Square from '../squareComponent/squareComponent';
import GameHeader from '../gameHeaderComponent/gameHeaderComponent';
import './board.css';

class Board extends Component {

       render() {
            return (
                <div>
                    <GameHeader />
                    <div className="Board">
                        <div className="container">
                            <div className="row">
                                <div className="board-grid">
                                    { [...Array(9)].map(() => <Square /> )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
       }
}


export default Board;
