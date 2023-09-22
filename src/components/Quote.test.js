import React from 'react';
import { render, waitFor } from '@testing-library/react';
import QuoteDisplay from './Quote';

// Mocking the global fetch function to simulate a response
global.fetch = jest.fn();

describe('QuoteDisplay component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('should render "Loading..." initially', () => {
    const { getByText } = render(<QuoteDisplay />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('should render the fetched quote after loading', async () => {
    // Mock fetch to return a successful response when data has been fetched
    global.fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([{ quote: 'Test Quote' }]),
    });

    const { getByText } = render(<QuoteDisplay />);

    //  Timers to trigger the fetch data intervals
    jest.advanceTimersByTime(5000);

    await waitFor(() => expect(getByText('Test Quote')).toBeInTheDocument());
  });

  it('should handle and display an error message', async () => {
  // Mock fetch to return an error response if did not fetch data
    global.fetch.mockResolvedValue({ ok: false });

    const { getByText } = render(<QuoteDisplay />);

    // Timers to trigger the fetch intervals
    jest.advanceTimersByTime(5000);

    await waitFor(() => expect(getByText('Error: Failed to fetch quote')).toBeInTheDocument());
  });
});
