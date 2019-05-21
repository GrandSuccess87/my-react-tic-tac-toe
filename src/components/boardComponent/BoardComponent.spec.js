import React from 'react';
import BoardComponent from './boardComponent';
import Square from '../squareComponent/squareComponent';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Board Component', () => {
  it('renders 9 Square components', () => {
    const wrapper = mount(<BoardComponent />);

    expect(wrapper.find(Square).length).toBe(9);
  });

  describe('Clicking the same square twice', () => {
    it('does not change the value', () => {
      const wrapper = mount(<BoardComponent />);

      wrapper.find(Square).at(0).simulate('click');
      wrapper.find(Square).at(0).simulate('click');

      expect(wrapper.state('value')).toBe('X');
    });
  });

  describe('Text placed in the square', () => {
    it('is a X', () => {
      const wrapper = mount(<BoardComponent />);
      const square = wrapper.find(Square).at(0);

      square.simulate('click');

      expect(square.text()).toBe('X');
    });

    it('is an O on second square click', () => {
      const wrapper = mount(<BoardComponent />);
      wrapper.find(Square).at(0).simulate('click');

      const square = wrapper.find(Square).at(1);
      square.simulate('click');

      expect(square.text()).toBe('O');
    });
  });
});
