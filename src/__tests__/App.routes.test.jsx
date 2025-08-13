import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App shell', () => {
  test('renders Home and top navbar links', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Home renders by default
    expect(screen.getByText(/About Matt/i)).toBeInTheDocument();

    // Top-level nav links are present
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Resume/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Articles/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument();
  });
});

