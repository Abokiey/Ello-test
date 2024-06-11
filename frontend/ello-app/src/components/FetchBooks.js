import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Box, CircularProgress, Typography, Grid } from '@mui/material';

const BOOKS_QUERY = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

const FetchBooks = () => {
  const { loading, error, data } = useQuery(BOOKS_QUERY);

  if (loading) return <CircularProgress />;
  if (error) return <Typography variant="h6" color="error">Error: {error.message}</Typography>;

  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>
        All Books
      </Typography>
      <Grid container spacing={2}>
        {data.books.map((book) => (
          <Grid item key={book.id} xs={12} sm={6} md={4}>
            <Box border={1} borderRadius={8} padding={2}>
              <img src={book.coverPhotoURL} alt={book.title} style={{ width: '100%' }} />
              <Typography variant="h6">{book.title}</Typography>
              <Typography variant="body1">by {book.author}</Typography>
              <Typography variant="body2">Reading Level: {book.readingLevel}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FetchBooks;
