import React from 'react';
import ButtonComponent from './buttonComponent';
import { mount } from 'enzyme';

describe('Button Component', () => {
  it('has a hyperlink reference to the correct url', () => {
    const wrapper = mount(<ButtonComponent url='.game/computerVsHuman'/>);

    expect(wrapper.find('[href=".game/computerVsHuman"]').length).toBe(1);
  })
});
