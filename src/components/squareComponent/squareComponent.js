import React, { Component } from 'react';

class Square extends Component {

    constructor(props) {
        super(props) // call super parent class constructor props
        this.state = {
            showMarker: true, // if true then marker will be shown    
        } 
    }

    toggleSquare = (e) => {
        e.preventDefault();
        const { showMarker } = this.state;
        this.setState({showMarker});
        console.log("Square Button Clicked!"); 
        console.log(this.state);
    }

    render() {
        return (
            <div className="Square">

                <div>
                    {/*Passing prop to child component */}
                    <button type="button" onClick={this.toggleSquare} className="btn btn-outline-primary board-Square">{this.props.value}</button> 

                </div>

            </div>

        );
    }

}


export default Square;