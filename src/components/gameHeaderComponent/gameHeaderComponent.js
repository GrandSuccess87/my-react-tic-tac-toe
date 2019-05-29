import React, { Component } from 'react';
import './GameHeaderComponent.css';


class GameHeader extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     gameStatus: ""
  //   };
  // }

  render() {
    return (
      <div>
        {this.props.value}
      </div>
    );
  }
}

export default GameHeader;
