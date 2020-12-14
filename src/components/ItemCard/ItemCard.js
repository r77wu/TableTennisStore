import React, {useState} from 'react';
import {connect} from 'react-redux';
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddToCartDialog from "../AddToCartDialog/AddToCartDialog";

import * as actions from '../../store/actions/index';

const useStyles = makeStyles(theme => ({
  container: {
    width: "400px",
    border: "2px solid #5CDB95",
    textAlign: "center"
  },
  image: {
    height: "300px",
    width: "300px",
    margin: "0.5em auto"
  },
  text: {
    margin: "0.5em"
  }
}))

const ItemCard = (props) => {
  const classes = useStyles();
  const {item, onAddItem} = props;
  const [openDialog, setOpenDialog] = useState(false);

  const addToCartHandler = () =>{
    setOpenDialog(true);

    const newItem = {
      id: item.id,
      brand: item.brand,
      name: item.name,
      price: item.price,
      img: item.img,
      quantity: 1
    }
    onAddItem(newItem);
  }

  const dialogCloseHandler = (event) => {
    event.preventDefault();
    setOpenDialog(false);
  }

  return (
    <React.Fragment>
      <Grid container direction="column" className={classes.container}>
        <Grid item>
          <img src={item.img} alt={item.name} className={classes.image}/>
        </Grid>
        <Grid item className={classes.text}>
          <Typography variant="h6">{`${item.brand} ${item.name}`}</Typography>
        </Grid>
        <Grid item className={classes.text}>
          <Typography variant="body1">{item.description}</Typography>
        </Grid>
        <Grid item className={classes.text}>
          <Typography variant="body2">{`Price: $${item.price}`}</Typography>
        </Grid>
        <Grid item>
          <Grid container justify="space-around">
            <Grid item>
              <Button>Learn More</Button>
            </Grid>
            <Grid item>
              <Button onClick={addToCartHandler}>Add To Cart</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <AddToCartDialog selectedItem={item} open={openDialog} onClose={dialogCloseHandler}/>
    </React.Fragment>
  )
}


const mapDispatchToProps = dispatch => {
  return {
    onAddItem: (newItem) => {
      dispatch(actions.addToCart(newItem));
    }
  }
}

export default connect(null, mapDispatchToProps)(ItemCard);
