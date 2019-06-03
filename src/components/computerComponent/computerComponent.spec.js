import React from 'react';
import ComputerComponent from './computerComponent';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Computer Component', () => {
  it('renders the Computer component without crashing', () => {
    const wrapper = mount(<ComputerComponent />);
  });
});