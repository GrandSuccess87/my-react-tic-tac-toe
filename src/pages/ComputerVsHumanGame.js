import React from 'react';
import ComputerVsHumanGameComponent from '../components/computerVsHumanGameComponent/computerVsHumanGameComponent';
import Computer from '../computer/computer';

export default class ComputerPage extends React.Component {

  render() {
    return (
      <ComputerVsHumanGameComponent computerPlayer={new Computer('X')}/>
    );
  }
}
