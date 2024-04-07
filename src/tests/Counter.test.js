// import necessary react testing library helpers
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Counter from '../components/Counter';
// import the Counter component

beforeEach(() => {
  // Render the Counter component
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();

});

test('should render initial count with value of 0', () => {
  const initialCount = screen.getByText(/0/i);
  expect(initialCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText(/\+/i);
  fireEvent.click(incrementButton);
  const newCount = screen.getByText(/1/i);
  expect(newCount).toBeInTheDocument();

});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText(/-/i);
  fireEvent.click(decrementButton);
  const newCount = screen.getByText(/-1/i);
  expect(newCount).toBeInTheDocument();

});
