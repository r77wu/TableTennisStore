import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from "@material-ui/styles";

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Assembly from '../../assets/image/Customize-Your-Own-Racket.jpg';
import Blades from '../../assets/image/STIGA_-_Legacy_Carbon_-_1300x770_17.jpg';
import Rubber from '../../assets/image/STIGA_-_DNA-_1300x770_14_1.jpg';
import Tables from '../../assets/image/ping-pong-tables.jpg';
import Balls from '../../assets/image/6c6fcc8c097d79cb.jpg';

const useStyles = makeStyles(theme => ({
  home: {
    backgroundColor: "#EDF5E1",
    padding: "3em 0"
  },
  assembly: {
    display: "block",
    margin: "1em auto",
    [theme.breakpoints.down("md")]: {
      width: "52em"
    },
    [theme.breakpoints.down("xs")]: {
      width: "30em"
    }
  },
  item:{
    display: "block",
    width: "50rem",
    height: "33rem",
    margin: "1em auto",
    [theme.breakpoints.down("md")]: {
      width: "35rem",
      height: "28rem"
    },
    [theme.breakpoints.down("xs")]: {
      width: "30rem",
      height: "18rem"
    }
  },
  button: {
    backgroundColor: theme.palette.common.green,
  },
  container: {
    textAlign: "center"
  }
}))

const Home = () => {
  const classes = useStyles();

  return (
    <section className={classes.home}>
      <div className={classes.container}>
        <img src={Assembly} alt="Assembly" className={classes.assembly}/>
        <Button color="secondary" className={classes.button} component={Link} to="/products">View Products</Button>
      </div>
      <Grid container>
        <Grid item lg={6} xs={12} md={6} className={classes.container}>
          <img src={Blades} alt="Blades" className={classes.item}/>
          <Button color="secondary" className={classes.button} component={Link} to="/blades">Shop Blades</Button>
        </Grid>
        <Grid item lg={6} xs={12} md={6} className={classes.container}>
          <img src={Rubber} alt="Rubber" className={classes.item}/>
          <Button color="secondary" className={classes.button} component={Link} to="/rubber">Shop Rubber</Button>
        </Grid>
        <Grid item lg={6} xs={12} md={6} className={classes.container}>
          <img src={Tables} alt="Tables" className={classes.item}/>
          <Button color="secondary" className={classes.button} component={Link} to="/tables">Shop Tables</Button>
        </Grid>
        <Grid item lg={6} xs={12} md={6} className={classes.container}>
          <img src={Balls} alt="Balls" className={classes.item}/>
          <Button color="secondary" className={classes.button} component={Link} to="/balls">Shop Balls</Button>
        </Grid>
      </Grid>
    </section>
  )
}

export default Home;
