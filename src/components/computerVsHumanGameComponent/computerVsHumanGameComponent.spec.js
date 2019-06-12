import React from 'react';
import ComputerComponent from './computerVsHumanGameComponent';
import { mount } from 'enzyme';

describe('Computer Component', () => {
  it('renders the Computer component without crashing', () => {
    const wrapper = mount(<ComputerComponent />);
  });
});
