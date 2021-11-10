import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  message: {
    display: 'flex',
    width: '70%',
    gap: theme.spacing(1),
  },
  bubble: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    borderRadius: theme.spacing(1),
    border: `1px solid ${theme.palette.grey['300']}`,
    padding: theme.spacing(2),
  },
  currentUser: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
}));
