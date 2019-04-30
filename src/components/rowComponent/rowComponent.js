import React, { Component } from 'react';

class Row extends Component {

//     constructor(props) {
//         super(props) 
//         this.state = {
//             value: null,
//             buttonDisabled: false     
//         } 
//     }

//     toggleSquare = () => {
//         this.setState({value: "X"}, () => console.log(this.state.value));
//         console.log("Square Button Clicked!"); 
//     }

    render() {
        return (
            <div className="Row">

<<<<<<< HEAD:src/components/rowComponent/rowComponent.js
                <div>
                    <button type="button" className="btn btn-outline-primary">1</button> 
                    <button type="button" className="btn btn-outline-primary">2</button> 
                    <button type="button" className="btn btn-outline-primary">3</button> 
=======
                 <div>
                     <button type="button" onClick={this.toggleSquare} className="btn btn-outline-primary board-Square">{this.state.value}</button> 
>>>>>>> features/createHomepage:src/components/squareComponent/squareComponent.js
                </div>
            </div>

        );
    }

}


export default Row;