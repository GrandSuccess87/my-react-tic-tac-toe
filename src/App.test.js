import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/headerComponent/headerComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('asserts false', () => {
  expect(false).toEqual(false);
});

it('asserts true', () => {
  expect(true).toEqual(true);
});