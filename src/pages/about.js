import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { aboutStyles } from '../styles'
import { formatMessage } from '../utils';
import { Layout, TeamAvatar } from '../components'

export default function About() {
  const classes = aboutStyles();

  const G = ({ children }) => {
    return(
      <Grid item xs={12} className={classes.grid}>
        <Container maxWidth="md">
          {children}
        </Container>        
      </Grid>        
    )
  }

  return (
    <Layout title={formatMessage("about.title")}>
      <div className={classes.root}>
        <Grid container>
          <G>
            <img src="/logos/logo-csl.png" className={classes.logo} />
          </G>        
          <G>
            <Typography className={classes.typography} variant="h4" component="h1" gutterBottom align="center">
              {formatMessage("about.title")}
            </Typography>
          </G>
          <G>
            <Typography className={classes.typography} variant="body1" gutterBottom align="center">
              {formatMessage("about.description.1")}
            </Typography>
          </G>        
          <G>
            <Typography className={classes.typography} variant="body1" gutterBottom align="center">
              {formatMessage("about.description.2")}
            </Typography>
          </G>        
          <G>
            <Typography className={classes.typography, classes.teamTitle} variant="h4" component="h1" gutterBottom align="center">
              {formatMessage("about.team.title")}
            </Typography>
          </G>
          <G>
            <TeamAvatar />
          </G>
        </Grid>
        <Grid container>
          <Grid item xs={12} className={classes.grid}>
            <Container maxWidth="md">
              &nbsp;
            </Container>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}
