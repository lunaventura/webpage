import { makeStyles } from '@material-ui/core/styles';

export const contactStyles = makeStyles(theme => ({
  root: {
    paddingTop: '2rem',
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));