// src/components/ReadingList.js
import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const ReadingList = ({ books, onRemove }) => {
  return (
    <List>
      {books.map((book) => (
        <ListItem key={book.id} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <ListItemText primary={book.title} secondary={book.author} />
          <Button 
            variant="contained" 
            color="error" 
            onClick={() => onRemove(book)}
          >
            Remove
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ReadingList;
