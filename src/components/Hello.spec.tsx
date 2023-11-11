import 'react-native';
import React from 'react';
import Hello from './Hello';
import {it, expect, describe} from '@jest/globals';
import {fireEvent, render, screen} from '@testing-library/react-native';

describe('Hello', () => {
  it('renders correctly', () => {
    render(<Hello />);
    expect(screen.getByText('Hello World')).toBeTruthy();
  });

  it('renders sum of 2 and 2', () => {
    render(<Hello />);
    expect(screen.getByText('4')).toBeTruthy();
  });

  it('should also say hi', () => {
    render(<Hello />);
    expect(screen.getByText('Hi!')).toBeTruthy();
  });

  it('should output zero bear', () => {
    render(<Hello />);
    expect(screen.getByText('0')).toBeTruthy();
  });

  it('should see a button to add bear', () => {
    render(<Hello />);
    expect(screen.getByTestId('increase')).toBeTruthy();
  });

  it('should increase by one when click on the button', () => {
    render(<Hello />);
    fireEvent.press(screen.getByTestId('increase'));
    expect(screen.getByText('1')).toBeTruthy();
  });
});
