import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';

import ItemCard from "../ItemCard/ItemCard";
import { Rubber } from "../../assets/products/products";

const useStyles = makeStyles({

});

const RubberItems = () => {
  const classes = useStyles();
  return (
    <section style={{margin: "3rem auto", minHeight: "75vh"}}>
      <div style={{width: "90%", margin: "1em auto"}}>
        <Typography variant="h5">Rubber</Typography>
      </div>
      <Grid container justify="space-around" spacing={2}>
        {Rubber.map(rubber => (
          <Grid item key={rubber.id}>
            <ItemCard item={rubber} img={rubber.img}/>
          </Grid>
        ))}
      </Grid>
    </section>
  )
}

export default RubberItems;
