import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const BookList = ({ books, onAdd }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 6;
  const totalPages = Math.ceil(books.length / booksPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * booksPerPage;
  const currentBooks = books.slice(startIndex, startIndex + booksPerPage);

  if (books.length === 0) return <p>No books searched</p>;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {currentBooks.map((book) => (
          <Box key={book.title} sx={{ width: '50%', padding: 1, boxSizing: 'border-box' }}>
            <Card sx={{ display: 'flex', width: '100%', margin: '0 auto' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
                <img src={book.coverPhotoURL} alt={book.title} style={{ width: 120, height: 120, objectFit: 'cover' }} />
              </Box>
              <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography component="h4" variant="h5">
                  {book.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {book.author}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Reading Level: {book.readingLevel}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: '#28B8B8', '&:hover': { backgroundColor: '#1f8d8d' } }}
                    onClick={() => onAdd(book)}
                  >
                    Add
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button
          variant="contained"
          sx={{ mr: 1, backgroundColor: '#28B8B8', '&:hover': { backgroundColor: '#1f8d8d' } }}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          &lt; Previous
        </Button>
        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
          Page {currentPage} of {totalPages}
        </Typography>
        <Button
          variant="contained"
          sx={{ ml: 1, backgroundColor: '#28B8B8', '&:hover': { backgroundColor: '#1f8d8d' } }}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next &gt;
        </Button>
      </Box>
    </Box>
  );
};

export default BookList;
