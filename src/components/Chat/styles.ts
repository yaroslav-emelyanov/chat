import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  chat: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    paddingRight: theme.spacing(3),
    marginRight: -theme.spacing(3),
    '& > div': {
      marginBottom: theme.spacing(3),
    },
  },
}));
