import React from 'react';
import ReactDOM from 'react-dom';
import GameBoard from './boardComponent';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Board Component', () => {
    it('renders the Board component without crashing', () => {
        const boardDiv = document.createElement('div');
        ReactDOM.render(<GameBoard />, boardDiv);
        ReactDOM.unmountComponentAtNode(boardDiv);
    });
});
