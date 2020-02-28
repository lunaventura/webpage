import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from '../components';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import HeroLayout from './HeroLayout';
import { home_img } from '../data/settings.json'
import { formatMessage } from '../utils';

const styles = theme => ({
  background: {
    //backgroundImage: `url(${home_img})`,
    backgroundColor: '#ffffff', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
    color: '#ffffff',
  },
  h5: {
    color: theme.palette.common.black,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(2),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function Hero(props) {
  const { classes } = props;

  return (
    <HeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={home_img} alt="increase priority" />
      <Container maxWidth="sm">
        <img src="/logos/logo-disol-w.png" width="100%" />
      </Container>
      <Typography align="center" variant="h6" className={classes.h5}>
        {formatMessage("home.event_city")}
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component={Link}
        href="/schedule"
      >
        {formatMessage("schedule.title")}
      </Button>
    </HeroLayout>
  );
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);
