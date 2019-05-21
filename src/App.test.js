import React from 'react';
import App from './App';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Tic Tac Toe Application', () => {

  it('renders without crashing', () => {
    const wrapper = mount(<App />);
  });
});
