import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Game from './components/gameComponent/gameComponent';

// automatically unmount and cleanup DOM after the test is finished
// afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shows loads game component without crashing', () => {
  const boardDiv = document.createElement('div');
  ReactDOM.render(<Game />, boardDiv);
  ReactDOM.unmountComponentAtNode(boardDiv);
});

it('renders an empty board', () => {
  const {showsEmptyBoard, noEmptyBoard} = render(
    <Game toggleOn='On' toggleOff='Off' />,
  );
    expect(showsEmptyBoard(/off/i)).toBeTruthy();
    fireEvent.click(noEmptyBoard(/off/i));
    expect(showsEmptyBoard(/on/i)).toBeTruthy();

});

it('asserts false', () => {
  expect(false).toEqual(false);
});

it('asserts true', () => {
  expect(true).toEqual(true);
});