import React, { Component } from 'react';
import request from '../../services/phoenixAPI';

class Dummy extends Component {

state = {
  boardSpots: []
}

componentDidMount = async () => {
  let result = await request();
  console.log(result);
  this.setState({
    boardSpots: result
  });
};

render() {
  return (

    <div>
      {this.state.boardSpots}
    </div>

  );
}
}






export default Dummy;
