// src/components/SelectedBooksIcon.js
import React, { useState } from 'react';
import { IconButton, Badge, Modal, Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import ListIcon from '@mui/icons-material/List';

const SelectedBooksIcon = ({ selectedBooks, onRemove }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleOpenModal} color="inherit">
        <Badge badgeContent={selectedBooks.length} color="error">
          <ListIcon />
        </Badge>
      </IconButton>
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" gutterBottom component="div">
            Selected Books
          </Typography>
          <List>
            {selectedBooks.map((book) => (
              <ListItem key={book.title} sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
        </Box>
      </Modal>
    </>
  );
};

export default SelectedBooksIcon;
