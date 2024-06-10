// src/components/BookList.js
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const GET_BOOKS = gql`
  query Books {
    books {
      id
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

const BookList = ({ onAdd }) => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <List>
      {data.books.map((book) => (
        <ListItem key={book.id} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <ListItemText
            primary={book.title}
            secondary={
              <>
                <p>{book.author}</p>
                <p>{book.readingLevel}</p>
                <img src={`../../assets/${book.coverPhotoURL}`} alt={book.title} style={{ width: 50, height: 50 }} />
              </>
            }
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => onAdd(book)}
          >
            Add
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default BookList;
