import React, { Component } from 'react';
import Square from '../squareComponent/squareComponent';

class Board extends Component {

    render() {
        return (
            <div className="Board Board_Row">
                <div className="text instructions-text">
                    <div className="row">
                        <div className="board-grid col-lg-4 col-md-4 col-sm-4">
                            <Square />
                            <Square />
                            <Square />
                        </div>
                        <div className="board-grid col-lg-4 col-md-4 col-sm-4">
                            <Square />
                            <Square />
                            <Square />
                        </div>
                        <div className="board-grid col-lg-4 col-md-4 col-sm-4">
                            <Square />
                            <Square />
                            <Square />
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}


export default Board;