import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '../components/Link';

import { formatMessage } from '../utils'
import { Layout } from '../components'

export default function Contact() {
  return (
    <Layout title={formatMessage("contact.title")}>
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
    </Layout>
  );
}
