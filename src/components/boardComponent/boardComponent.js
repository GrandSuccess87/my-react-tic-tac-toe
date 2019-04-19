import React, { Component } from 'react';
import Row from '../rowComponent/rowComponent';

class Board extends Component {

    render() {
        return (
            <div className="Board Board_Row">
                <div className="text instructions-text">
                    <div className="row">
                        <div className="board-grid col-lg-12 col-md-12 col-sm-12">
                            <Row />
                            <Row />
                            <Row />
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}


export default Board;