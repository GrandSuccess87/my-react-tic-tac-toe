import React from 'react';
import ButtonComponent from './buttonComponent';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Button Component', () => {
  it('has a hyperlink reference to the correct url', () => {
    const wrapper = mount(<ButtonComponent url='.game/computerVsHuman'/>);

    expect(wrapper.find('[href=".game/computerVsHuman"]').length).toBe(1);
  })
});
