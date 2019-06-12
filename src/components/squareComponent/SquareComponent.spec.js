import React from 'react';
import GameSquare from './squareComponent';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Square Component', () => {

  it('calls toggle marker on click', () => {
    const toggleMarker = jest.fn();
    const wrapper = mount(<GameSquare toggleMarker={toggleMarker} />);

    wrapper.simulate('click');
    wrapper.update();

    expect(toggleMarker).toHaveBeenCalled();
  });
});
