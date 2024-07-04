import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of project one.',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Project Two',
    description: 'A brief description of project two.',
    image: 'https://via.placeholder.com/150'
  }
];

const Projects = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects;

