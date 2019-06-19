import React from 'react';
import GameSquare from './squareComponent';
import { mount } from 'enzyme';

describe('Square Component', () => {

  it('calls toggle marker on click', () => {
    const toggleMarker = jest.fn();
    const wrapper = mount(<GameSquare toggleMarker={toggleMarker} />);

    wrapper.simulate('click');
    wrapper.update();

    expect(toggleMarker).toHaveBeenCalled();
  });
});
