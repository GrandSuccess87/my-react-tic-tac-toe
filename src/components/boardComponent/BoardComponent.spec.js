import React from 'react';
import BoardComponent from './boardComponent';
import Board from '../../board/board';
import Square from '../squareComponent/squareComponent';
import { mount } from 'enzyme';

describe('Board Component', () => {
  it('renders 9 Square components', () => {
    const wrapper = mount(<BoardComponent board={new Board()}/>);
  
    expect(wrapper.find(Square).length).toBe(9);
    });
});