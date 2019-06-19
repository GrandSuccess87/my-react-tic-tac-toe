import Enzyme from "enzyme";
import React from 'react';
import Main from './mainComponent';
import { mount } from 'enzyme';

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
