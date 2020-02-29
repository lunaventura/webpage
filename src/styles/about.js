import { makeStyles } from '@material-ui/core/styles';

export const aboutStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(7),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  container: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  grid: {
    padding: theme.spacing(1),
    textAlign: 'center',
  },
  typography: {
    paddingTop: theme.spacing(1),
  },
  logo: {
    paddingTop: theme.spacing(3),
    maxWidth: '250px',
  },
  teamTitle: {
    paddingTop: theme.spacing(7),
  },
}));