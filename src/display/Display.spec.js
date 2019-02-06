import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

describe('the display component', () => {
  test('checks for red-led class when door is locked or closed', () => {
    const { getByText } = render(<Display closed="closed" locked="locked" />);

    expect(getByText(/closed/i)).toHaveClass('red-led');
    expect(getByText(/locked/i)).toHaveClass('red-led');
  });
  test('checks for green-led class when door is locked or closed', () => {
    const { getByText } = render(<Display closed="" locked="" />);

    expect(getByText(/open/i)).toHaveClass('green-led');
    expect(getByText(/unlocked/i)).toHaveClass('green-led');
  });
});
