import React, { Component } from 'react';
import Game from '../../components/boardComponent/boardComponent';

class gamePage extends Component {
    render() {
        return (
            <div>
                <div>
                    <Game />
                </div>
            </div>
        )
    }
}

export default gamePage;