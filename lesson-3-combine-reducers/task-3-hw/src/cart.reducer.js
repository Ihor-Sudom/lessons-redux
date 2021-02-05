import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const initalState = {
    product: []
}

const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        product: state.product.concat(action.payload)
      }
    case REMOVE_PRODUCT:
      const removeProduct = state.product.filter((product) => product.id !== action.payload)
      return {
        ...state,
        product: removeProduct
      }
    default:
      return state;
  }
}

export default cartReducer;