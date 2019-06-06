import React from 'react';
import HumanComponent from './humanComponent';
import Square from '../squareComponent/squareComponent';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Human Component', () => {
    it('renders the Human component without crashing', () => {
    const wrapper = mount(<HumanComponent />);
    });
});

describe('Text placed in the square', () => {
    it('is a X', () => {
      const wrapper = mount(<HumanComponent />);
      const square = wrapper.find(Square).at(0);
  
      square.simulate('click');
  
      expect(square.text()).toBe('X');
    });
  
  it('is an O on second square click', () => {
    const wrapper = mount(<HumanComponent/>);
    wrapper.find(Square).at(0).simulate('click');
  
    const square = wrapper.find(Square).at(1);
    square.simulate('click');
  
    expect(square.text()).toBe('O');
    });
  });
  
  describe('Clicking the same square twice', () => {
    it('does not change the value', () => {
        const wrapper = mount(<HumanComponent/>);
  
        wrapper.find(Square).at(0).simulate('click');
        wrapper.find(Square).at(0).simulate('click');
  
        expect(wrapper.state('value')).toBe('X');
    });
});