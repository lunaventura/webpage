import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { formatMessage } from '../utils'
import { Layout, Schedule as ScheduleForm  } from '../components'
import { scheduleStyles } from '../styles'

export default function Schedule() {
  const classes = scheduleStyles();

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
    <Layout title={formatMessage("schedule.title")}>
      <div className={classes.root}>
        <Grid container>
          <G>
            <Typography className={classes.typography} variant="h4" component="h1" gutterBottom align="center">
              {formatMessage("schedule.title")}
            </Typography>
          </G>
          <G>
            <ScheduleForm />
          </G>
        </Grid>
      </div>
    </Layout>
  );
}
