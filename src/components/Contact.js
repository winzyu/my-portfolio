import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Me
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            id="message"
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <Button variant="contained" color="primary">
            Send
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Contact;

