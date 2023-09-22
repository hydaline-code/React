
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message on the home page', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to our Page/i);
  expect(welcomeElement).toBeInTheDocument();
});
