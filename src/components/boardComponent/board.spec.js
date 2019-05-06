import React from 'react';
import ReactDOM from 'react-dom';
import GameBoard from './boardComponent';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Square from '../squareComponent/squareComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('Board Component', () => {
  it('renders the Board component without crashing', () => {
    const boardDiv = document.createElement('div');
    ReactDOM.render(<GameBoard />, boardDiv);
    ReactDOM.unmountComponentAtNode(boardDiv);
  });

  it('renders 9 Square components', () => {
    const wrapper = mount(<GameBoard />);

    expect(wrapper.find(Square).length).toBe(9);
  });

});
