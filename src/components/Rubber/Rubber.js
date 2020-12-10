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

import rubber1 from "../../assets/image/rubber3.jpg";
import {Rubber} from "../../assets/products/products";

const useStyles = makeStyles({
  root: {
    maxWidth: "445px",
  },
  media: {
    height: "400px",
  },
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
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  title={`${rubber.name}`}
                  image={rubber1}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {`${rubber.brand} ${rubber.name}`}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {rubber.description}
                  </Typography>
                  <Divider style={{marginTop: "10px"}}/>
                  <Typography variant="body1" color="textSecondary" component="p">
                    {`Price: $${rubber.price}`}
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

export default RubberItems;
