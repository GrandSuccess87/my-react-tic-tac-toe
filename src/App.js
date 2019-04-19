import React, { Component } from 'react';
import './App.css';
import Main from "./components/mainComponent/mainComponent";
// import Game from "./components/gameComponent/gameComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Main />
        <div className="row">
          {/* <div className="col-lg-12 col-md-12 col-sm-12">
            <Game />
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;
