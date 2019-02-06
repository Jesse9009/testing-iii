import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from './Controls';

describe('the controls component', () => {
  test('checks if there are buttons to toggle between open/closed and locked/unlocked', () => {
    const { getByText, getByTestId } = render(<Controls />);
    getByTestId('openBtn');
    getByTestId('lockBtn');
  });
  test('checks if locked toggle button is disabled if the gate is open', () => {
    // gate is open on initial load
    const { getByText } = render(<Controls />);
    expect(getByText(/lock gate/i)).toBeDisabled();
  });
  test('checks if open/close toggle button is disabled if the gate is locked', () => {
    // closing and locking gate with the passed in props. Should result in disabled 'open' button
    const { getByText } = render(<Controls closed="closed" locked="locked" />);
    expect(getByText(/open gate/i)).toBeDisabled();
  });
});
