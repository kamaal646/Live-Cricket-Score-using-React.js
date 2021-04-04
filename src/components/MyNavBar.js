import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {btn} from './FetchRandomDogApi';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

       {/* <AppBar position="static"> */}


        <Toolbar>
       <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> 
           {/* <MenuIcon /> */}
          </IconButton> 

          <Button id="fetch-button" variant="contained" color="primary" onClick = {btn} > fetch random dog images </Button>
         
        </Toolbar> 
       {/* </AppBar> */}

       <Grid container justify="center" >

      <img id = "dog-image" className="images"/>

      </Grid>


    </div>
  );
}



