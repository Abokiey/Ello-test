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
    setReadingList([...readingList, book]);
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
          <ReadingList books={readingList} onRemove={removeBookFromReadingList} />
        </Box>
      </Container>
    </ApolloClientProvider>
  );
}

export default App;
