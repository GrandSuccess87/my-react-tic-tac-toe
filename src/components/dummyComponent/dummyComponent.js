import React, { Component } from 'react';
import PhoenixApi from '../../services/phoenixAPI';

class Dummy extends Component {

state = {
  boardSpots: []
}

componentDidMount = async () => {
  let result = await PhoenixApi.request();
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
