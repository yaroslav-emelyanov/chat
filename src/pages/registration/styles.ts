import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: theme.spacing(4),
    '& > :not(:first-child)': {
      marginTop: theme.spacing(3),
    },
  },
  paperWrapper: {
    padding: theme.spacing(4),
  },
}));
