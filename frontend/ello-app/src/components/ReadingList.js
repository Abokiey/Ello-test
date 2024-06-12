import React from 'react';
import { List, ListItem, ListItemText, Button, Typography, Box } from '@mui/material';

const ReadingList = ({ books, onRemove }) => {
  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom sx={{color: '#335C6E'}}>
        Reading List
      </Typography>
      <List>
        {books.map((book) => (
          <ListItem key={book.id} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <ListItemText primary={book.title} secondary={book.author} />
            <Button 
              variant="contained" 
              sx={{ backgroundColor: '#F76434', '&:hover': { backgroundColor: '#D8562E' } }}
              onClick={() => onRemove(book)}
            >
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ReadingList;
