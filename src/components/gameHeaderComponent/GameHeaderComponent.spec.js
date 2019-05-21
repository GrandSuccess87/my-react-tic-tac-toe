import React from 'react';
import GameHeader from './gameHeaderComponent';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Header Component', () => {
  it('renders the Game header component without crashing', () => {
    const wrapper = mount(<GameHeader />);

    wrapper.unmount();
  });
});
