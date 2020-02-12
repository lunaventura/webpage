import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '../components/Link';

export default function Contact() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact
        </Typography>
        <Button variant="contained" color="primary" component={Link} naked href="/">
          Go to home
        </Button>
      </Box>
    </Container>
  );
}
