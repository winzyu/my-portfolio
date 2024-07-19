import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import winsonCreature from './images/winsonCreature-Photoroom (1).png';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundImage:
    'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
  [theme.breakpoints.up('md')]: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const ProfileImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: 300,
  height: 'auto',
  borderRadius: '50%',
  boxShadow: '0 20px 20px rgba(0, 0, 0, 0.1)',
  border: '5px solid white', // Add a white border
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)', // Add a slight zoom effect on hover
  },
}));

export default function Hero() {
  return (
    <StyledBox id="hero">
      <Container sx={{
        borderRadius: '20px',
        padding: '20px',
      }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5} 
            // align profile image to center
            sx={{ 
              textAlign: { xs: 'center', md: 'left' }, 
              display: 'flex', 
              justifyContent: { xs: 'center', md: 'flex-end' },
              pr: { md: 4 }
              }}>
            <ProfileImage src={winsonCreature} alt="Winson Creature" />
          </Grid>
          <Grid item xs={12} md={7}>
            <Stack spacing={2} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 'bold',
                  color: 'primary.main',
                }}
              >
                Winson Yu
              </Typography>
              <Typography variant="h4" color="text.secondary">
                Software Developer
              </Typography>
              <Typography variant="body1" sx={{ maxWidth: 600 }}>
                CS / Statistics: ML Track at UC Davis. Growing passion
                for artificial intelligence and machine learning.
              </Typography>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ pt: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}
              >
                <Button variant="contained" color="primary" size="large">
                  View Portfolio
                </Button>
                <Button variant="outlined" color="primary" size="large">
                  Contact Me
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </StyledBox>
  );
}
