import React from 'react';
import ComputerComponent from './computerVsHumanGameComponent';
import FakeComputer from '../../computer/fakeComputer';
import Square from '../squareComponent/squareComponent';
import { mount } from 'enzyme';

function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

describe('Computer making a move', () => {
  it('places an X for the first move', () => {
    const computerPlayer = new FakeComputer('X');
    const wrapper = mount(<ComputerComponent computerPlayer={computerPlayer} />);

    return flushPromises().then(() => {
      const square = wrapper.find(Square).at(0);
      expect(square.text()).toBe('X');
    });
  });
});

describe('Human making a move', () => {
  it('places an O for first move', () => {
    const computerPlayer = new FakeComputer('X');
    const wrapper = mount(<ComputerComponent computerPlayer={computerPlayer} />);

    const square = wrapper.find(Square).at(1);
    square.simulate('click');
    wrapper.update();

    return flushPromises().then(() => {
      expect(square.text()).toBe('O');
    });
  });
});
