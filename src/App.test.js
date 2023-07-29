import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import BookingForm from './Components/Reservations/BookingForm';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders the booking form heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("bookNow");
  expect(headingElement).toBeInTheDocument();
});

