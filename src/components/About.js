import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1">
          Hello! I'm a passionate developer with experience in React and other technologies. I love building web applications and learning new things.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;

