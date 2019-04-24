import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Game from './components/gameComponent/gameComponent';
import Board from './components/boardComponent/boardComponent';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shows loads game component without crashing', () => {
  const boardDiv = document.createElement('div');
  ReactDOM.render(<Game />, boardDiv);
  ReactDOM.unmountComponentAtNode(boardDiv);
});

// Sample test
// it('should toggle second buttons disabled state', () => {
//   const wrapper = shallow(<Game />);
//   const firstButton = wrapper.find('button').at(0);
//   const secondButton = wrapper.find('button').at(1);

//   firstButton.simulate('click');
//   expect("disabled" in secondButton.props()).toEqual(true);

//   firstButton.simulate('click');
//   expect("disabled" in secondButton.props()).toEqual(false);
// });

it('should render the board', () => {
  const wrapper = shallow(<Game />);
  const boardWrapper = shallow(<Board />);
  const button = wrapper.find('button').at(0)

  button.simulate('click');
  expect("show" in button.props()).toEqual(true);

  button.simulate('click');
  expect("show" in button.props()).toEqual(false);
});

it('asserts false', () => {
  expect(false).toEqual(false);
});

it('asserts true', () => {
  expect(true).toEqual(true);
});