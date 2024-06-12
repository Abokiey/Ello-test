import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const BookList = ({ books, onAdd }) => {
  if (books.length === 0) return <p>No books available</p>;

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {books.map((book) => (
        <Box key={book.title} sx={{ width: '50%', padding: 1, boxSizing: 'border-box' }}>
          <Card sx={{ display: 'flex', width: '100%', margin: '0 auto' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
              <img src={book.coverPhotoURL} alt={book.title} style={{ width: 120, height: 120, objectFit: 'cover' }} />
            </Box>
            <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography component="h" variant="h5">
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
  );
};

export default BookList;
