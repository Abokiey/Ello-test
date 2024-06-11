import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useLazyQuery, gql } from '@apollo/client';

const SEARCH_BOOKS = gql`
  query SearchBooks($query: String!) {
    searchBooks(query: $query) {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [searchBooks, { loading, error }] = useLazyQuery(SEARCH_BOOKS, {
    variables: { query },
    onCompleted: (data) => {
      onSearch(data.searchBooks);
    }
  });

  const handleSearch = () => {
    searchBooks();
  };

  return (
    <Box display="flex" mb={2}>
      <TextField 
        label="Search for a book" 
        variant="outlined" 
        fullWidth 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSearch}
        sx={{ ml: 2 }}
        disabled={loading}
      >
        Search
      </Button>
      {error && <p>Error: {error.message}</p>}
    </Box>
  );
};

export default SearchBar;
