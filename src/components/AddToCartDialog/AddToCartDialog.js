import React from 'react';
import {Link} from 'react-router-dom';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from "@material-ui/core/Button";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const AddToCartDialog = (props) => {
  const {selectedItem, open, onClose} = props;

  return (

    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Added to Cart</DialogTitle>
      <DialogContent>
        <DialogContentText>{`${selectedItem.brand} ${selectedItem.name}`}</DialogContentText>
        <DialogContentText>{`Price: $${selectedItem.price}`}</DialogContentText>
        <DialogContentText>Quantity: 1</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button component={Link} to='/cart'>View Cart & Check Out</Button>
        <Button onClick={onClose}>Continue Shopping</Button>
      </DialogActions>
    </Dialog>
  )
}


export default AddToCartDialog;
