import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import Button from "@material-ui/core/Button";

import * as actions from '../../store/actions/index';

const useStyles = makeStyles(theme => ({
  cartSection: {
    minHeight: "82vh",
    margin: "2rem"
  },
  title: {
    textAlign: "center",
    marginBottom: "5rem",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "10px"
    }
  },
  productContainer: {
    height: "10rem",
    marginBottom: "1rem",
    border: "1px solid #5CDB95",
    [theme.breakpoints.down("md")]: {
      height: "15rem",
      margin: "2rem auto"
    },
    [theme.breakpoints.down("xs")]: {
      height: "25rem",
      margin: "4rem auto"
    }
  },
  buttonContainer: {
    textAlign: "center"
  },
  checkoutButton: {
    margin: "2rem auto",
    width: "25rem",
    fontSize: "20px",
    backgroundColor: "#5CDB95",
    "& :hover": {
      backgroundColor: "#5CDB95"
    }
  }

}))

const Cart = (props) => {
  const classes = useStyles();
  const {inCartItems, totalPrice, onUpdateCart} = props;
  const [cartItems, setCartItems] = useState([]);
  const [displayPrice, setDisplayPrice] = useState(0);

  useEffect(() => {
    setCartItems(inCartItems);
    setDisplayPrice(totalPrice);
  },[inCartItems, totalPrice]);

  const quantityChangeHandler = (event, updateItem) => {
    event.preventDefault();
    updateItem.quantity = parseInt(event.target.value, 10);
    setCartItems(prevState => {
      return prevState.map(item => {
        if(item.id === updateItem.id){
          return updateItem;
        } else {
          return item;
        }
      })
    })
  }

  const removeItemHandler = (event, updateItem) => {
    event.preventDefault();
    setCartItems(prevState => {
      return prevState.filter(item => {
        if(item.id !== updateItem.id) {
          return item;
        }
      })
    })
  }

  const updateCartHandler = () => {
    onUpdateCart(cartItems);
  }

  const emptyCart = (
    <Grid item>
      <Typography variant="body1">
        Cart is empty
      </Typography>
    </Grid>
  )

  const cart = (
    <Grid item>
      <Grid container direction="column">
        {
          cartItems.map(item => (
            <Grid item key={item.id}>
              <Grid container justify="space-around" alignItems="center" className={classes.productContainer} spacing={4}>
                <Grid item  xs={6} lg={3}>
                  <img src={item.img} alt={item.name} style={{height: "120px", width: "120px"}}/>
                </Grid>
                <Grid item  xs={6} lg={3}>
                  <Typography variant="h6">{`${item.brand} ${item.name}`}</Typography>
                </Grid>
                <Grid item  xs={6} lg={3}>
                  <TextField id="quantity" label="Quantity" type="number" variant="outlined" defaultValue={item.quantity} inputProps={{min: 0}} onChange={event => quantityChangeHandler(event, item) }/>
                  <Button onClick={event => removeItemHandler(event, item)}>Remove</Button>
                </Grid>
                <Grid item  xs={6} lg={3}>
                  <Typography variant="body1">{`Price: $${(item.price * item.quantity).toFixed(2)}`}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ))
        }
      </Grid>
    </Grid>
  )

  return (
    <section className={classes.cartSection} >
      <Grid container direction="column" >
        <Grid item className={classes.title}>
          <Typography variant="h2">Your Cart</Typography>
        </Grid>
        {cartItems.length === 0 ? emptyCart : cart}
        <Grid item className={classes.totalPrice}>
          <Grid container justify="space-around">
            <Grid item>
              <Button color="primary" onClick={updateCartHandler}>Update Cart</Button>
            </Grid>
            <Grid item>
              <Typography variant="h5">{`Total Price: $${displayPrice.toFixed(2)}`}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={12} md={12} xs={12} className={classes.buttonContainer}>
          <Button component={Link} to="/checkout" color="secondary" className={classes.checkoutButton}>Check Out</Button>
        </Grid>
      </Grid>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    inCartItems: state.checkout.inCartItems,
    totalPrice: state.checkout.totalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdateCart: (updateCart) => {
      dispatch(actions.updateCart(updateCart));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
