import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useLazyQuery, gql } from '@apollo/client';

const SEARCH_BOOKS_BY_TITLE = gql`
  query Books($title: String!) {
    books(title: $title) {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

const SearchBar = ({ onSearch }) => {
  const [title, setTitle] = useState('');

  const [searchBooks, { loading, error }] = useLazyQuery(SEARCH_BOOKS_BY_TITLE, {
    onCompleted: (data) => {
      onSearch(data.books);
    }
  });

  const handleSearch = () => {
    if (title.trim() !== '') {
      searchBooks({ variables: { title } });
    }
  };

  return (
    <Box display="flex" mb={2} sx={{ color: '#28B8B8' }}>
      <TextField 
        label="Search for a book" 
        variant="outlined" 
        fullWidth 
        sx={{ 
          '& input': { color: '#28B8B8' }, 
          '& .MuiInputLabel-root': { color: '#28B8B8' },
        }} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSearch}
        sx={{ backgroundColor: '#5ACCCC', '&:hover': { backgroundColor: '#28B8B8' } }}
        disabled={loading}
      >
        Search
      </Button>
      {error && <p>Error: {error.message}</p>}
    </Box>
  );
};

export default SearchBar;
