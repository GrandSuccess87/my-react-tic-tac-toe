import React from 'react';
import ButtonComponent from './buttonComponent';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Button Component', () => {
  it('renders the button component without crashing', () => {
    const wrapper = mount(<ButtonComponent />);
  });
});
