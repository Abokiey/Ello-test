// src/App.js
import React, { useState } from 'react';
import { Container, Box, Typography, CssBaseline } from '@mui/material';
import ApolloClientProvider from './ApolloClient';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import ReadingList from './components/ReadingList';

function App() {
  const [readingList, setReadingList] = useState([]);

  const addBookToReadingList = (book) => {
    setReadingList([...readingList, book]);
  };

  const removeBookFromReadingList = (bookToRemove) => {
    setReadingList(readingList.filter(book => book.id !== bookToRemove.id));
  };

  return (
    <ApolloClientProvider>
      <CssBaseline />
      <Container>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Book App for Teachers
          </Typography>
          <SearchBar />
          <BookList onAdd={addBookToReadingList} />
          <ReadingList books={readingList} onRemove={removeBookFromReadingList} />
        </Box>
      </Container>
    </ApolloClientProvider>
  );
}

export default App;
