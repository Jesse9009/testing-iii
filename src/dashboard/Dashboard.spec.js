// Test away
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
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
  test('checks if the buttons text toggles between open/close and lock/unlock', () => {
    const { getByText, getByTestId } = render(<Dashboard />);
    const openBtn = getByTestId('openBtn');
    const lockBtn = getByTestId('lockBtn');

    expect(openBtn).toHaveTextContent(/close gate/i);
    expect(lockBtn).toHaveTextContent(/lock gate/i);

    fireEvent.click(openBtn);
    fireEvent.click(lockBtn);

    expect(openBtn).toHaveTextContent(/open gate/i);
    expect(lockBtn).toHaveTextContent(/unlock gate/i);
  });
});
