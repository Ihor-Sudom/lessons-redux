import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const initalState = {
  cart: {
    product: []
  }
}

const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        cart: {
          ...state.cart,
          product: state.cart.product.concat(action.payload)
        }
      }
    }
    case REMOVE_PRODUCT: {
      const removeProduct = state.cart.product.filter((product) => product.id !== action.payload)
      return {
        ...state,
        cart: {
          ...state.cart,
          product: removeProduct
        }
      }
    }
    default:
      return state;
  }
}

export default cartReducer;