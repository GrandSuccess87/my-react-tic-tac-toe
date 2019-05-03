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
                <Route exact path="/game" component= {Pages.Game} />
            </Switch>
        </Router>
    );
  }
}

export default App;
