import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Hidden  from '@material-ui/core/Hidden'

import { formatMessage } from '../utils'
import { 
  Hero, 
  Layout,
  VenueLocation, 
  CardOfVenue 
} from '../components'

export default function Index() {
  return (
    <Layout title={formatMessage("home.title")}>
      <Hero />

      <Hidden only="xs">
        <VenueLocation />
      </Hidden>
      <Hidden smUp>
        <CardOfVenue />
      </Hidden>
    </Layout>
  );
}
