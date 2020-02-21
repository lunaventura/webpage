import { makeStyles } from '@material-ui/core/styles';

export const contactStyles = makeStyles(theme => ({
  root: {
    paddingTop: '2rem',
    flexGrow: 1,
  },
  inputSpacing: {
    padding: theme.spacing(1),
    textAlign: 'center',
  },
}));