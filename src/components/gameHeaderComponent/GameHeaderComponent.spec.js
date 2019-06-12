import React from 'react';
import GameHeader from './gameHeaderComponent';
import { mount } from 'enzyme';

describe('Header Component', () => {
  it('renders the Game header component without crashing', () => {
    const wrapper = mount(<GameHeader />);
  });
});
