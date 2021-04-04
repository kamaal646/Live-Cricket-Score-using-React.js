import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@material-ui/core';
import React,{Fragment, useState} from 'react'
import {getMatchDetails}  from '../api/Api';
import img from '../img/logo.jpg';


const MyCard = ( {match} )=>{

const [details, setDetails] = useState( {} );

const [open, setOpen] = useState(false);


  const handleClick = (id) => {

      getMatchDetails (id)
      .then((data) => {
      console.log("My match data", data);
      setDetails(data);
      handleOpen();
   })
      .catch((error) => console.log(error));
  }


  const getMatchCart = ()=>{
      return (
        
    <Card style={{marginTop: 20}}>

           <CardContent>

        <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item>
                <Typography variant="h5"> {match && match["team-1"]} </Typography>
            </Grid>
            <Grid item>

        <img style={{width: 85}} src={img} alt="vs image" />

             </Grid> 
            <Grid item>
                <Typography variant="h5"> {match && match["team-2"]} </Typography>
            </Grid>

        </Grid>

          {/* <Typography variant="h5"> </Typography> */}
                
            </CardContent>

             <CardActions>
                <Grid container justify="center" >

                <Button onClick={()=> {

                handleClick(match["unique_id"]);
                }}

                 variant="contained" color="primary"> Show detail</Button>

                <Button  style={{marginLeft: 5}} variant="contained" color="primary"> {new Date(match.dateTimeGMT).toLocaleString()} </Button>
                
                </Grid>

            </CardActions>

    </Card>
 )

  };

const handleClose = () =>{
     setOpen(false);
}

const handleOpen = () =>{
      setOpen(true);
}

const getDialog = () => (
    <Dialog open = {open} onClose={handleClose} >
       <DialogTitle id="alert-dialog-title"> {"Match Details..."} </DialogTitle>
  
  <DialogContent>
       <DialogContentText id="alert-dialog-description">
          <Typography> {details.stat} </Typography>

    <Typography>
          Match <span style={{ fontStyle: "italic", fontWeight: "bold" }}> {details.matchStarted ? "started" : "still not started"} </span>
    </Typography>

  
    <Typography>
          score <span style={{ fontStyle: "italic", fontWeight: "bold" }}> {details.score} </span>
    </Typography>

       </DialogContentText>
       </DialogContent>
       
       <DialogActions>
           <Button onClick={handleClose} color="primary" autoFocus > close </Button>
       </DialogActions>

    </Dialog>
);


    return (
           <Fragment>

              {getMatchCart()}
              { getDialog() }

            </Fragment>
        )
    
};
  export default MyCard;