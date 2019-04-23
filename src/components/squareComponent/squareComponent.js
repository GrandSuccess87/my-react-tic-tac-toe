import React, { Component } from 'react';

class Square extends Component {

    constructor(props) {
        super(props) 
        this.state = {
            value: null
        } 
    }

    toggleSquare = (e) => {
        this.setState({value: "X"}); 
    }

    render() {
        return (
            <div className="Square">

                <div>
                    <button type="button" onClick={this.toggleSquare} className="btn btn-outline-primary board-Square">{this.state.value}</button> 
                </div>

            </div>

        );
    }

}


export default Square;