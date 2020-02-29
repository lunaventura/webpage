import { makeStyles } from '@material-ui/core/styles';

export const scheduleStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(12),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(3),
  },
  typography: {
    paddingTop: theme.spacing(1),
  },
}));
