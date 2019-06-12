import Enzyme from "enzyme";
import React from 'react';
import Main from './mainComponent';
import ButtonComponent from '../buttonComponent/buttonComponent';
import {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Main Component', () => {
  it('renders a new page after start button is click', () => {
    const wrapper = mount(<Main />);

    wrapper.find('.human-page').simulate('click');
    wrapper.update();

    expect(wrapper.find('[href="./game/HumanVsHuman"]').length).toBe(1);

  });

  it('renders a new page for human vs. computer after start button is click', () => {
    const wrapper = mount(<Main />);

    wrapper.find('.computer-page').simulate('click');
    wrapper.update();

    expect(wrapper.find('[href="./game/ComputerVsHuman"]').length).toBe(1);

  });
});
