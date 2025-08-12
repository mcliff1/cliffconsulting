import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

test('renders footer with current year and company', () => {
  render(<Footer />);
  const year = new Date().getFullYear().toString();
  expect(screen.getByText((content) => content.includes('Cliff Consulting'))).toBeInTheDocument();
  expect(screen.getByText((content) => content.includes(year))).toBeInTheDocument();
});

