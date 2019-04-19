import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './components/mainComponent/mainComponent';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders game component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a new page after start button is click', () => {
  const wrapper = shallow(<Main />);
  wrapper.find('a').simulate('click');
  const linkToGame = wrapper.find('.game-page');
  expect(linkToGame.length).toEqual(1);
});