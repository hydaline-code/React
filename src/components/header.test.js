import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from './header';

it('should navigate to the home page when the Home link is clicked', () => {
  const { getByText } = render(
    <Router>
      <Header />
    </Router>,
  );

  const homeLink = getByText('Home |');
  fireEvent.click(homeLink);

  expect(window.location.pathname).toBe('/');
});

it('should navigate to the calculator page when the Calculator link is clicked', () => {
  const { getByText } = render(
    <Router>
      <Header />
    </Router>,
  );

  const calculatorLink = getByText('Calculator |');
  fireEvent.click(calculatorLink);

  expect(window.location.pathname).toBe('/calculator');
});

it('should navigate to the quotes page when the Quotes link is clicked', () => {
  const { getByText } = render(
    <Router>
      <Header />
    </Router>,
  );

  const quotesLink = getByText('Quotes |');
  fireEvent.click(quotesLink);

  expect(window.location.pathname).toBe('/quotes');
});

test('Header snapshot test', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
