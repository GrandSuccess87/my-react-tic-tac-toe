import React, { Component } from 'react';
import './App.css';
import Pages from "./pages/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Pages.Main} />
          <Route exact path="/game/HumanVsHuman" component= {Pages.Human} />
          <Route exact path="/dummy" component= {Pages.Dummy} />
          <Route exact path="/game/ComputerVsHuman" component= {Pages.Computer} />
        </Switch>
      </Router>
    );
  }
}

export default App;
