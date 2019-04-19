import React, { Component } from 'react';
import Square from '../squareComponent';

class Board extends Component {

    render() {
        return (
            <div className="Board Board_Square">
                <div className="text instructions-text">
                    <div className="row">
                        <div className="board-grid col-lg-12 col-md-12 col-sm-12">
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