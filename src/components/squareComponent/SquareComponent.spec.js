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

    expect(toggleMarker).toHaveBeenCalled();
  });

  // it('disables the square when there is a value', () => {
  //   const wrapper = mount(<GameSquare value={'X'} />);
  //
  //   expect(wrapper.find('div').props()['disabled']).toBe(true);
  //
  // });

  // it('does not disable the square when there is not a value', () => {
  //   const wrapper = mount(<GameSquare value={null} />);
  //
  //   expect(wrapper.find('div').props()['disabled']).toBe(false);
  //
  // });
});
