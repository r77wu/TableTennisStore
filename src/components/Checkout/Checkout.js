import React, {useState} from 'react';
import {connect} from 'react-redux';
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  checkoutContainer: {
    minHeight: "80vh",
    marginTop: "3rem"
  },
  textField: {
    width: "25rem",
    [theme.breakpoints.down("md")]: {
      width: "25rem",
    }
  },
  orderButton: {
    width: "20rem",
    margin: "3rem",
    fontSize: "2rem",
    backgroundColor: "#5CDB95"
  }
}));

const Checkout = (props) => {
  const classes = useStyles();
  const {checkoutItems, totalPrice} = props;

  const [shippingInfo, setShippingInfo] = useState({
    firstName: {
      value: "",
      type: "text",
      label: "First Name"
    },
    lastName: {
      value: "",
      type: "text",
      label: "Last Name"
    },
    address: {
      value: "",
      type: "text",
      label: "Address"
    },
    city: {
      value: "",
      type: "text",
      label: "City"
    },
    country: {
      value: "",
      type: "text",
      label: "Country"
    },
    province: {
      value: "",
      type: "text",
      label: "Province"
    },
    postalCode: {
      value: "",
      type: "text",
      label: "Postal Code"
    },
    phone: {
      value: "",
      type: "text",
      label: "Phone"
    }
  });

  let shippingEl = [];
  for (let key in shippingInfo) {
    shippingEl.push({
      id: key,
      config: shippingInfo[key]
    })
  }

  const inputChangeHandler = (event, inputField) => {
    event.preventDefault();
    const updatedInfo = event.target.value;
    setShippingInfo(prevState => ({
      ...prevState,
      [inputField]: {
        ...prevState[inputField],
        value: updatedInfo
      }
    }))
  }

  const shippingPart = (
    <Grid container direction="column" >
      {shippingEl.map(el =>
        (<Grid item key={el.id} lg={12}>
          <TextField className={classes.textField} id={el.id} label={el.config.label} type={el.config.type} value={el.config.value} onChange={(event) => inputChangeHandler(event, el.id)}/>
        </Grid>)
      )
      }
    </Grid>
  );

  const summaryPart = (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h5">Summary</Typography>
      </Grid>
      {
        checkoutItems.map(item => (
          <Grid item key={item.id}>
            <Grid container justify="space-around" alignItems="center" spacing={4}>
              <Grid item xs={6} lg={3}>
                <img src={item.img} alt={item.name} style={{height: "50px", width: "50px"}}/>
              </Grid>
              <Grid item xs={6} lg={3}>
                <Typography variant="body1">{`${item.brand} ${item.name}`}</Typography>
              </Grid>
              <Grid item xs={6} lg={3}>
                <Typography variant="body2">{`Quantity: ${item.quantity}`}</Typography>
              </Grid>
              <Grid item xs={6} lg={3}>
                <Typography
                  variant="body2">{`Price: $${(item.price * item.quantity).toFixed(2)}`}</Typography>
              </Grid>
            </Grid>
          </Grid>
        ))
      }
      <Grid item>
        <Typography variant="h5">{`Total Price: $${totalPrice.toFixed(2)}`}</Typography>
      </Grid>
    </Grid>
  )

  return (
    <section className={classes.checkoutContainer}>
      <Grid container justify="space-around" spacing={2}>
        <Grid item lg={6} xs={12} md={6}>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Typography variant="h6">Shipping Information</Typography>
            </Grid>
            <Grid item>
              {shippingPart}
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6} xs={12} md={6}>
          {summaryPart}
        </Grid>
        <Grid item>
          <Button color="secondary" className={classes.orderButton}> Place Order</Button>
        </Grid>
      </Grid>
    </section>
)
}

const mapStateToProps = state =>{
    return {
      checkoutItems: state.checkout.inCartItems,
      totalPrice: state.checkout.totalPrice
    }}

export default connect(mapStateToProps)(Checkout);
