import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('Portfolio app', () => {
  it('renders recruiter-focused hero copy', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /Joseph Alejo/i })).toBeInTheDocument();
    expect(screen.getByText(/Software \/ Web \/ AI Internship Candidate/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View Work/i })).toHaveAttribute('href', '#work');
  });

  it('renders portfolio sections and project order', () => {
    render(<App />);

    expect(screen.getByRole('navigation', { name: /Primary navigation/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Useful web apps and applied AI projects/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /AparTrack/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /LuntiAI/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /PC Cafe Simulation/i })).toBeInTheDocument();
  });

  it('exposes resume and contact links', () => {
    render(<App />);

    expect(screen.getAllByRole('link', { name: /Download Resume|PDF Resume/i }).length).toBeGreaterThan(0);
    expect(screen.getByRole('link', { name: /Email/i })).toHaveAttribute('href', 'mailto:josephalejo1412@gmail.com');
    expect(screen.getAllByRole('link', { name: /GitHub/i }).some((link) => link.getAttribute('href') === 'https://github.com/wrnzn')).toBe(true);
  });
});
