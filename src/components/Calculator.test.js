import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

describe('Calculator', () => {
  it('should render correctly', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });

  it('should handle button click', () => {
    const { getByText } = render(<Calculator />);
    const button = getByText('7');
    fireEvent.click(button);
    expect(button.textContent).toBe('7');
  });

  it('should reset display to 0 when "AC" button is pressed after other buttons', () => {
    const { container } = render(<Calculator />);
    const display = container.querySelector('.display');
    // Simulate clicking a button other than "AC"
    const button = container.querySelector('.wide');
    fireEvent.click(button);
    // Simulate clicking the "AC" button
    const acButton = container.querySelector('.color');
    fireEvent.click(acButton);

    expect(display.textContent).toBe('0');
  });
});
