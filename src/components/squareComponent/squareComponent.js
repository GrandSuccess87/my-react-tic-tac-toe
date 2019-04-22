import React, { Component } from 'react';

class Square extends Component {

    constructor(props) {
        super(props) // call super parent class constructor props
        this.state = {
            value: null     
        } 
    }

    toggleSquare = () => {
        this.setState({value: "X"}, () => console.log(this.state.value));
        console.log("Square Button Clicked!"); 
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