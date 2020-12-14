import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import {connect} from 'react-redux';

const Cart = (props) => {
  const {inCartItems} = props;

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
          inCartItems.map(item => (
            <Grid item key={item.id}>
              <Grid container justify="space-evenly">
                <Grid item>
                  <img src={item.img} alt={item.name} style={{height: "100px", width: "100px"}}/>
                </Grid>
                <Grid item >
                  <Typography variant="h6">{`${item.brand} ${item.name}`}</Typography>
                </Grid>
                <Grid item >
                  <Typography variant="body1">{item.description}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">{`Quantity : ${item.quantity}`}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1">{`Price: ${item.price}`}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ))
        }
      </Grid>
    </Grid>
  )

  return (
    <section style={{minHeight: "82vh"}}>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h2">Your Cart</Typography>
        </Grid>
        {inCartItems.length === 0 ? emptyCart : cart}
      </Grid>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    inCartItems: state.checkout.inCartItems
  }
}

export default connect(mapStateToProps)(Cart);
