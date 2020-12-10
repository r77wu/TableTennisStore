import React from "react";
import {Link} from 'react-router-dom';
import {makeStyles} from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.green,
    position: "relative",
    bottom: 0,
    width: "100%"
  },
  item: {
    fontSize: "1em",
    fontWeight: 500,
    color: theme.palette.common.blue,
    textTransform: "none",
    marginBottom: "0.5em",
    textDecoration: "none"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container direction="row" justify="space-around" alignItems="flex-start">
        <Grid item >
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h6" color="secondary">Customer Service</Typography>
            </Grid>
            <Grid item component={Link} to="/about" className={classes.item}>
              About Us
            </Grid>
            <Grid item component={Link} to="/contact" className={classes.item}>
              Contact Us
            </Grid>
          </Grid>
        </Grid>
        <Grid item >
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h6" color="secondary">Follow Us</Typography>
            </Grid>
            <Grid item>
              <Grid container justify="space-evenly">
                <Grid item>
                  <InstagramIcon color="secondary"/>
                </Grid>
                <Grid item>
                  <FacebookIcon color="secondary"/>
                </Grid>
                <Grid item>
                  <TwitterIcon color="secondary"/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  )
}

export default Footer;
