import { render, screen } from '@testing-library/react';
import App from '../App';
import Temp from '../Components/Temp';

test('renders app', () => {
  render(<App />);
  const linkElement = screen.getByTestId(/app/i);
  expect(linkElement).toBeInTheDocument();
});