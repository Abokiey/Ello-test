import React, { useState } from 'react';
import { Container, Box, Typography, CssBaseline } from '@mui/material';
import ApolloClientProvider from './ApolloClient';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import ReadingList from './components/ReadingList';
import Logo from './components/Logo';

function App() {
  const [readingList, setReadingList] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState([]);

  const addBookToReadingList = (book) => {
    // Check if the book is already in the reading list
    if (!readingList.some(b => b.title === book.title)) {
      setReadingList([...readingList, book]);
    } else {
      alert('Book already in the reading list');
    }
  };

  const removeBookFromReadingList = (bookToRemove) => {
    setReadingList(readingList.filter(book => book.title !== bookToRemove.title));
  };

  const handleSearch = (books) => {
    setSearchedBooks(books);
  };

  return (
    <ApolloClientProvider>
      <CssBaseline />
      <Container>
        <Box my={4}>
          <Box display="flex" alignItems="center">
            <Box position="absolute" top={20} left={20}>
              <Logo />
            </Box>
            <Typography 
              variant="h4" component="h1" gutterBottom
              sx={{ color: '#335C6E' }}   
            >
              Book App for Teachers
            </Typography>
          </Box>
          <SearchBar onSearch={handleSearch} />
          <BookList books={searchedBooks} onAdd={addBookToReadingList} />
          {readingList.length > 0 && (
            <ReadingList books={readingList} onRemove={removeBookFromReadingList} />
          )}
        </Box>
      </Container>
    </ApolloClientProvider>
  );
}

export default App;
