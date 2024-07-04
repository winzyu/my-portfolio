import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { CssBaseline } from '@mui/material';
import { Container, Box } from '@mui/system';

function App() {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Container>
        <Box my={4}>
          <About />
          <Projects />
          <Contact />
        </Box>
      </Container>
    </div>
  );
}

export default App;

