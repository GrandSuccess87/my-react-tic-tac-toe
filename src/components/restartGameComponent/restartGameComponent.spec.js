import React from 'react';
import RestartGameComponent from './restartGameComponent';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Restart Game Component', () => {
  it('renders the restart game component without crashing', () => {
    const wrapper = mount(<RestartGameComponent />);
  });
});
