import React, { Component } from 'react';
import './App.css';
import Main from "./components/mainComponent/mainComponent";
import Game from "./pages/game/game";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/game" component= {Game}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
