import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/headerComponent/headerComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders header without crashing', () => {
  const header = document.createElement('div');
  ReactDOM.render(<Header />, header);
  ReactDOM.unmountComponentAtNode(header);
});

it('asserts true', () => {
  expect(true).toEqual(true);
});

it('asserts false', () => {
  expect(false).toEqual(false);
});

it('returns correct integer', () => {
  expect(7).toEqual(7);
});