import * as actionTypes from '../actions/actionTypes';


const initialState = {
  inCartItems: [

  ],
  totalPrice: 0,
};

const addToCart = (state, action) => {
  const id = action.newItem.id;
  const existItem = state.inCartItems.filter(item => item.id === id);
  let inCartItems;
  if(existItem.length !==0 ) {
    inCartItems = state.inCartItems.map(item => {
      if(item.id === id) {
        return ({
          ...item,
          quantity: item.quantity + 1
        });
      } else {
        return item;
      }
    })

  } else {
    inCartItems = [
      ...state.inCartItems,
      action.newItem
    ]
  }

  const totalPrice = state.totalPrice + action.newItem.price * action.newItem.quantity;
  return {
    inCartItems,
    totalPrice
  }
}

const updateCart = (state, action) => {
  const inCartItems = action.updateCart
  const totalPrice = action.updateCart.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity
  }, 0);

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
    case actionTypes.UPDATE_CART:
      return updateCart(state, action);
    default:
      return state;
  }
};

export default reducer;
