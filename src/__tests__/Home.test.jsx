import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';

test('renders Home content', () => {
  render(<Home />);
  expect(screen.getByText(/About Matt/i)).toBeInTheDocument();
  expect(
    screen.getByText(/welcome to Matt Cliff/i)
  ).toBeInTheDocument();
});

