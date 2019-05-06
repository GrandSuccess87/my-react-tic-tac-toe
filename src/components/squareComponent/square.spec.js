import React from 'react';
import ReactDOM from 'react-dom';
import GameSquare from './squareComponent';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Square Component', () => {

  it('renders the Square component without crashing', () => {
    const gameSpaceDiv = document.createElement('div');
    ReactDOM.render(<GameSquare />, gameSpaceDiv);
    ReactDOM.unmountComponentAtNode(gameSpaceDiv);
  });

});
