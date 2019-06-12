import React from 'react';
import BoardComponent from './boardComponent';
import Board from '../../board/board';
import Square from '../squareComponent/squareComponent';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Board Component', () => {
  it('renders 9 Square components', () => {
    const wrapper = mount(<BoardComponent board={new Board()}/>);
  
    expect(wrapper.find(Square).length).toBe(9);
    });
});