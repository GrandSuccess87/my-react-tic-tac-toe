import React, { Component } from 'react';
import './gameHeaderComp.css';

class GameHeader extends Component {
   render() {
       return (
           <div>
               <div className="game-Header">
                   <div className="container">
                       <div className="row">
                           <div className="player-heading col-lg-6 col-md-6 col-sm-6 col-xs-6">
                               <h3 className="player-text">X's TURN</h3>
                           </div>
                           <div className="player-heading col-lg-6 col-md-6 col-sm-6 col-xs-6">
                               <h3 className="player-text">O's TURN</h3>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       );
   }
}

export default GameHeader;
