import React from 'react';
import { render, screen } from '@testing-library/react';
import Articles from './Articles';

test('renders Articles with expected links', () => {
  render(<Articles />);
  expect(screen.getByText(/Articles/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Capstone Report/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Linear Regression/i })).toBeInTheDocument();
});

