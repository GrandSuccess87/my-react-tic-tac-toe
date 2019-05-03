import React, { Component } from 'react';
import './squareComp.css';

class Square extends Component {

    render() {
        return (
            <div>
                <div className="game-spaces" id="space"></div>
            </div>
        );
    }
}


export default Square;
