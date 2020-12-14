import * as actionTypes from '../actions/actionTypes';
import {act} from "@testing-library/react";

const initialState = {
  inCartItems: [

  ],
  totalPrice: 0,
};

const addToCart = (state, action) => {
  const inCartItems = [
    ...state.inCartItems,
    action.newItem
  ]
  const totalPrice = state.totalPrice + action.newItem.price * action.newItem.quantity;
  return {
    ...state,
    inCartItems,
    totalPrice
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return addToCart(state, action);
    default:
      return state;
  }
};

export default reducer;
