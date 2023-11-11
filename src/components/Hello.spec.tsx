import 'react-native';
import React from 'react';
import Hello from './Hello';
import {test, expect} from '@jest/globals';
import {render, screen} from '@testing-library/react-native';

test('renders correctly', () => {
  render(<Hello />);
  expect(screen.getByText('Hello World')).toBeTruthy();
});

test('renders sum of 2 and 2', () => {
  render(<Hello />);
  expect(screen.getByText('4')).toBeTruthy();
});

test('should also say hi', () => {
  render(<Hello />);
  expect(screen.getByText('Hi!')).toBeTruthy();
});
