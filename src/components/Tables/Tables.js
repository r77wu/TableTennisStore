import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";

import table1 from "../../assets/image/table1.jpg";
import {Tables} from "../../assets/products/products";

const useStyles = makeStyles({
  root: {
    maxWidth: "445px",
  },
  media: {
    height: "400px",
  },
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
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  title={`${table.name}`}
                  image={table1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {`${table.brand} ${table.name}`}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {table.description}
                  </Typography>
                  <Divider style={{marginTop: "10px"}}/>
                  <Typography variant="body1" color="textSecondary" component="p">
                    {`Price: $${table.price}`}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
                <Button size="small" color="primary">
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  )
}

export default TablesItems;
