import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ', () => {
  render(<App />);
  const linkElement = screen.getByTestId(/temp/i);
  expect(linkElement).toBeInTheDocument();
});
