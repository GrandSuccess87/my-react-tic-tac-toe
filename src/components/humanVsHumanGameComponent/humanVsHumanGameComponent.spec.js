import React from 'react';
import HumanComponent from './humanVsHumanGameComponent';
import Square from '../squareComponent/squareComponent';
import { mount } from 'enzyme';

describe('Making a move', () => {
  it('places an X for the first move', () => {
    const wrapper = mount(<HumanComponent />);
    const square = wrapper.find(Square).at(0);

    square.simulate('click');
    wrapper.update();

    expect(square.text()).toBe('X');
  });

  it('places an O for the second move', () => {
    const wrapper = mount(<HumanComponent/>);
    wrapper.find(Square).at(0).simulate('click');
    wrapper.update();

    const square = wrapper.find(Square).at(1);
    square.simulate('click');
    wrapper.update();

    expect(square.text()).toBe('O');
  });
});