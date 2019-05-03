import React from 'react';
import ReactDOM from 'react-dom';
import GameSquare from './squareComponent';
import GameBoard from '../boardComponent/boardComponent';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Square Component', () => {

    it('renders the Square component without crashing', () => {
        const gameSpaceDiv = document.createElement('div');
        ReactDOM.render(<GameSquare />, gameSpaceDiv);
        ReactDOM.unmountComponentAtNode(gameSpaceDiv);
      });

      it('renders one Square component within the Board componenet without crashing', () => {
        const wrapper = shallow(<GameBoard />);
        expect(wrapper.contains(<GameSquare />)).toBe(true);
      });

      it('renders 9 Square components', () => {
        const wrapper = shallow(<GameBoard />);
        expect(wrapper.find(GameSquare).length).toBe(9);
      });
});
