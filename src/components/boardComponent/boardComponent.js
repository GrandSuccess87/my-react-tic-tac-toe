import React, { Component } from 'react';
import Row from '../rowComponent/rowComponent';

class Board extends Component {

    renderSquare(i) {
        /* Passing prop from this parent to child component */
        return <Row value={i} /> 
    }

    render() {
        return (
            <div className="Board Board_Row">
                <div className="text instructions-text">
                    <div className="row">
                        <div className="board-grid col-lg-4 col-md-4 col-sm-4">
                            {this.renderSquare(0)}  {/*Invokes the renderSquare method */}
                            {this.renderSquare(1)}
                            {this.renderSquare(2)}
                        </div>
                        <div className="board-grid col-lg-4 col-md-4 col-sm-4">
                            {this.renderSquare(3)}  {/*Invokes the renderSquare method */}
                            {this.renderSquare(4)}
                            {this.renderSquare(5)}
                        </div>
                        <div className="board-grid col-lg-4 col-md-4 col-sm-4">
                            {this.renderSquare(6)}  {/*Invokes the renderSquare method */}
                            {this.renderSquare(7)}
                            {this.renderSquare(8)}
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}


export default Board;