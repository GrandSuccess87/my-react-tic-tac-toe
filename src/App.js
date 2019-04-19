import React, { Component } from 'react';
import './App.css';
import Main from "./components/mainComponent/mainComponent";
import GameHeader from "./components/gameHeaderComponent/gameHeaderComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/game" component={GameHeader}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
