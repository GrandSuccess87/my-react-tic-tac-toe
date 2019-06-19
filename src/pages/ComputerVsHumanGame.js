import React from 'react';
import ComputerVsHumanGameComponent from '../components/computerVsHumanGameComponent/computerVsHumanGameComponent';
import Computer from '../computer/computer';
import PhoenixAPI from '../services/phoenixAPI';

export default class ComputerPage extends React.Component {

  render() {
    return (
      <ComputerVsHumanGameComponent computerPlayer={new Computer('X')} api={PhoenixAPI}/>
    );
  }
}
