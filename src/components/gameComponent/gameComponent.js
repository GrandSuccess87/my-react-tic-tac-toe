// import React, { Component } from 'react';
// import Board from '../boardComponent';

// class Game extends Component {

    // constructor(props) {
    //     super(props) // call super parent class constructor props
    //     this.state = {show: false} // if true the data will be shown
    //     // this.toggleDiv = this.toggleDiv.bind(this); // bind this to the toggle div
    // }

    // toggleDiv = (e) => {
    //     e.preventDefault();
    //     console.log("Start Button Clicked");
    //     const { show } = this.state;
    //     this.setState({show: !show}) 
    //     // this.setState = { show: !show} // change values in state attribute
    //     console.log(this.state);
    // }
//     render() {
//         return (
//             <div className="Game">
//                 {/* <div className="start_game">
//                     <button onClick={this.toggleDiv} type="button" className="btn btn-outline-primary">Start Game</button> 
//                 </div> */}
//                 <div className="Game_Board">
//                 {/* //based on state variable the board will show */}
//                     {this.state.show && <Board /> } 
//                 </div>
//             </div>
//         );
//     }

// }


// export default Game;