import { render, screen } from '@testing-library/react';
import App from './App';

test('renders todo app header', () => {
  render(<App />);
  
  const headerElement = screen.getByText(/My Todo App/i);
  expect(headerElement).toBeInTheDocument();
});

test('shows login form when not authenticated', () => {
  render(<App />);
  
  const loginButton = screen.getByText(/Login/i);
  expect(loginButton).toBeInTheDocument();
});