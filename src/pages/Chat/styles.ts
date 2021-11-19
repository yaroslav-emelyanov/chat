import { makeStyles } from '@material-ui/core';

const DRAWER_WIDTH = 240;

export const useStyles = makeStyles((theme) => ({
  page: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
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
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
  addButton: {
    width: 40,
    minWidth: 'auto',
  },
}));
