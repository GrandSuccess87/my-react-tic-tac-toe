import React from 'react';
import ReactDOM from 'react-dom';
import GameHeader from './gameHeaderComponent';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Header Component', () => {
  it('renders the Game header component without crashing', () => {
    const gameHeaderDiv = document.createElement('div');
    ReactDOM.render(<GameHeader />, gameHeaderDiv);
    ReactDOM.unmountComponentAtNode(gameHeaderDiv);
  });
});
