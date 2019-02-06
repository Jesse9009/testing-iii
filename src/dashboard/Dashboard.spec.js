// Test away
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';

describe('the dashboard component', () => {
  test('checks if gate defaults to display "unlocked" and "open"', () => {
    const { getByText } = render(<Dashboard />);
    getByText('Unlocked');
    getByText('Open');
  });
  test('confirms that the display and controls are rendered', () => {
    const { getByTestId } = render(<Dashboard />);
    getByTestId('lockBtn');
    getByTestId('openBtn');
  });
});
