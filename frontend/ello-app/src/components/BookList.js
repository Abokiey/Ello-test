import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const BookList = ({ books, onAdd }) => {
  return (
    <List>
      {books.map((book) => (
        <ListItem key={book.id} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <ListItemText primary={book.title} secondary={book.author} />
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
