import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';

import {Balls} from "../../assets/products/products";
import ItemCard from "../ItemCard/ItemCard";

const useStyles = makeStyles({

});

const BallsItems = () => {
  const classes = useStyles();
  return (
    <section style={{margin: "3rem auto", minHeight: "75vh"}}>
      <div style={{width: "90%", margin: "1em auto"}}>
        <Typography variant="h5">Balls</Typography>
      </div>
      <Grid container justify="space-around" spacing={2}>
        {Balls.map(ball => (
          <Grid item key={ball.id}>
            <ItemCard item={ball} img={ball.img}/>
          </Grid>
        ))}
      </Grid>
    </section>
  )
}

export default BallsItems;
