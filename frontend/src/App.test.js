import { render, screen } from '@testing-library/react';
import App from './App';

test('renders profile react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/profile/i);
  expect(linkElement).toBeInTheDocument(); // Vérifie que le lien "profile" est dans le DOM
});

test('renders Dashboard react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/dashboard/i);
  expect(linkElement).toBeInTheDocument(); // Vérifie que le lien "Dashboard" est dans le DOM
});
test('renders holiday react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/holiday/i);
  expect(linkElement).toBeInTheDocument(); // Vérifie que le lien "Dashboard" est dans le DOM
});
test('renders time react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/time/i);
  expect(linkElement).toBeInTheDocument(); // Vérifie que le lien "Dashboard" est dans le DOM
});
test('renders timetable react link', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /timetable/i });
expect(linkElement).toBeInTheDocument();


});

  




