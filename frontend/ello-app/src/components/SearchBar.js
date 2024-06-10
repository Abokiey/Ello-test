import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const results = [
      { id: 1, title: 'Book One', author: 'Author One' },
      { id: 2, title: 'Book Two', author: 'Author Two' },
    ].filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
    onSearch(results);
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
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
