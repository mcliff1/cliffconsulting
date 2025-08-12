import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from './Projects';

test('renders Projects and project items', () => {
  render(<Projects />);
  expect(screen.getByText(/Projects/i)).toBeInTheDocument();
  // Titles from project_list
  expect(screen.getByText(/Data Science Specialization Capstone/i)).toBeInTheDocument();
  expect(screen.getByText(/Denver Data Exploration and Mapping/i)).toBeInTheDocument();
  expect(screen.getByText(/Signal Bot/i)).toBeInTheDocument();
});

