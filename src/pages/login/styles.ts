import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: theme.spacing(4),
    '& > :first-child': {
      marginBottom: theme.spacing(2),
    },
    '& > :not(:first-child)': {
      marginTop: theme.spacing(2),
    },
  },
  paperWrapper: {
    maxWidth: 640,
    padding: theme.spacing(4),
  },
}));
