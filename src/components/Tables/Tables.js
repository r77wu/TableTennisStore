import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';

import {Tables} from "../../assets/products/products";
import ItemCard from "../ItemCard/ItemCard";

const useStyles = makeStyles({

});

const TablesItems = () => {
  const classes = useStyles();
  return (
    <section style={{margin: "3rem auto", minHeight: "75vh"}}>
      <div style={{width: "90%", margin: "1em auto"}}>
        <Typography variant="h5">Tables</Typography>
      </div>
      <Grid container justify="space-around" spacing={2}>
        {Tables.map(table => (
          <Grid item key={table.id}>
            <ItemCard item={table} img={table.img}/>
          </Grid>
        ))}
      </Grid>
    </section>
  )
}

export default TablesItems;
