import React from 'react';
import App from './App';
import { mount } from 'enzyme';

describe('Tic Tac Toe Application', () => {

  it('renders without crashing', () => {
    const wrapper = mount(<App />);
  });
});
