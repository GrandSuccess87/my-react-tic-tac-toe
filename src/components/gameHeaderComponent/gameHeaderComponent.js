import React, { Component } from 'react';

class GameHeader extends Component {
   render() {
       return (
           <div>
               <div className="Game-header">
                    <h3>Player 1: X</h3>
                    <h3>Player 2: O</h3>
               </div>
           </div>
       )
   } 
}

export default GameHeader;