import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const BookList = ({ books, onAdd }) => {
  if (books.length === 0) return <p>No books found</p>;

  return (
    <List>
      {books.map((book) => (
        <ListItem key={book.title} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <ListItemText
            primary={book.title}
            secondary={
              <>
                <p>{book.author}</p>
                <p>{book.readingLevel}</p>
                <img src={`${book.coverPhotoURL}`} alt={book.title} style={{ width: 100, height: 100 }} />
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
