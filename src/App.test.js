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

it('defaults to not rendering the board', () => {
  const wrapper = shallow(<Game />);
  const board = wrapper.find(Board);
  expect(wrapper.contains(<Board />)).toBe(false);
});

it('renders the board after the start button is clicked', () => {
  const wrapper = shallow(<Game />);
  wrapper.find('button').simulate('click');
  const board = wrapper.find(Board);
  expect(wrapper.contains(<Board />)).toBe(true);
});

it('asserts false', () => {
  expect(false).toEqual(false);
});

it('asserts true', () => {
  expect(true).toEqual(true);
});