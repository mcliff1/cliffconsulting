import React from 'react';
import { render, screen } from '@testing-library/react';
import Resume from '../Resume';

test('renders Resume page and sections', () => {
  render(<Resume />);
  expect(screen.getByText(/Resume/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /PDF/i })).toBeInTheDocument();
  // Objective section is open by default
  expect(
    screen.getByText(/Seeking role in cloud architecture/i)
  ).toBeInTheDocument();
});

