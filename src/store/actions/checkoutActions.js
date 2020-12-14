import * as actionTypes from './actionTypes';

export const addToCart = (newItem) => {
  return {
    type: actionTypes.ADD_TO_CART,
    newItem
  }
}
