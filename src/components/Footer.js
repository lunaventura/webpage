import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { the_event, social } from '../data/settings.json'

function Copyright() {
  return (
    <>
       <p>{the_event.full_name}{" "}{new Date().getFullYear()}</p>
       <p>{the_event.org}</p>
    </>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.warning.white,
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
}));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                {social.map((x,i) => 
                  x.enable ?
                    <Link
                      href={x.url}
                      title={x.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <a key={i} href={x.url} className={classes.icon}>
                        <img src={x.img_url} alt={x.name} />
                      </a>
                    </Link>
                  :null
                )}
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
