import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

// Mock the child components used in App
jest.mock('./ApolloClient', () => ({ children }) => <div>{children}</div>);
jest.mock('./components/SearchBar', () => ({ onSearch }) => (
  <button onClick={() => onSearch([{ title: 'Test Book' }])}>Search</button>
));
jest.mock('./components/BookList', () => ({ books, onAdd }) => (
  <div>
    {books.map((book, index) => (
      <div key={index}>
        {book.title}
        <button onClick={() => onAdd(book)}>Add</button>
      </div>
    ))}
  </div>
));
jest.mock('./components/ReadingList', () => ({ books, onRemove }) => (
  <div>
    {books.map((book, index) => (
      <div key={index}>
        {book.title}
        <button onClick={() => onRemove(book)}>Remove</button>
      </div>
    ))}
  </div>
));
jest.mock('./components/Logo', () => () => <div>Logo</div>);

test('renders App component', () => {
  render(<App />);

  // Check that the main header is rendered
  expect(screen.getByText(/Book App for Teachers/i)).toBeInTheDocument();

  // Simulate searching for a book
  fireEvent.click(screen.getByText(/Search/i));
  expect(screen.getByText(/Test Book/i)).toBeInTheDocument();

  // Simulate adding a book to the reading list
  fireEvent.click(screen.getByText('Add'));
  expect(screen.getAllByText(/Test Book/i)).toHaveLength(2);

  // Simulate removing a book from the reading list
  fireEvent.click(screen.getByText('Remove'));
  expect(screen.getAllByText(/Test Book/i)).toHaveLength(1);
});
