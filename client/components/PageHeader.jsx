import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing()
  },
  addButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

export default function PageHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.addButton} color="inherit" aria-label="create a ticket">
            <Link to='/InputForm'>
              <AddCircleIcon/>
            </Link>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Tickets Dashboard
          </Typography>
          <AccountCircle color="inherit"/>
        </Toolbar>
      </AppBar>
    </div>
  );
}