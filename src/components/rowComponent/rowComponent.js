import React, { Component } from 'react';

class Row extends Component {

    constructor(props) {
        super(props) // call super parent class constructor props
        this.state = {
            showMarker: true, // if true then marker will be shown   
            xValue: null, 
        } 
    }

    toggleSquare = (e) => {
        e.preventDefault();
        const { showMarker } = this.state;
        this.setState({showMarker});
        console.log("Square Button Clicked!"); 
        console.log(this.state);
        // this.setState({xValue:'X'});
    }

    render() {
        return (
            <div className="Row">

                <div>
                    {/*Passing prop to child component */}
                    <button type="button" onClick={this.toggleSquare} className="btn btn-outline-primary board-row">{this.props.value}</button> 
                    {/* <button type="button" onClick={this.toggleSquare} className="btn btn-outline-primary board-row">{this.props.value}</button>  */}
                    {/* <button type="button" onClick={this.toggleSquare} className="btn btn-outline-primary board-row">{this.props.value}</button>  */}
                </div>

            </div>

        );
    }

}


export default Row;