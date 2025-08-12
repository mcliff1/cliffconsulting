import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('renders Contact info', () => {
  render(<Contact />);
  expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  expect(screen.getByText(/matt@denvercliffs.com/i)).toBeInTheDocument();
  expect(screen.getByText(/720-280-6324/)).toBeInTheDocument();
});

