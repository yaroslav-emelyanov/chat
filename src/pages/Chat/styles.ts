import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  page: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  form: {
    marginTop: theme.spacing(3),
  },
  listEmpty: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
