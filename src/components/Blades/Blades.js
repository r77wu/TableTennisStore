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
import blade1 from "../../assets/image/blade1.jpg";
import Divider from "@material-ui/core/Divider";

import {Blades} from "../../assets/products/products";

const useStyles = makeStyles({
  root: {
    maxWidth: "445px",
  },
  media: {
    height: "400px",
  },
});

const BladesItems = () => {
  const classes = useStyles();
  return (
    <section style={{margin: "3rem auto", minHeight: "75vh"}}>
      <div style={{width: "90%", margin: "1em auto"}}>
        <Typography variant="h5">Blades</Typography>
      </div>
      <Grid container justify="space-around" spacing={2}>
        {Blades.map(blade => (
          <Grid item key={blade.id}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  title={`${blade.name}`}
                  image={blade1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {`${blade.brand} ${blade.name}`}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {blade.description}
                  </Typography>
                  <Divider style={{marginTop: "10px"}}/>
                  <Typography variant="body1" color="textSecondary" component="p">
                    {`Price: $${blade.price}`}
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

export default BladesItems;
